import React, { useEffect, useRef, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";

const DetailedLetter = styled.div`
  font-family: 'KCCChassam';
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;

  width: 800px;
  height: 500px;
  padding: 17px;
  gap: 10px;

  border-radius: 20px;
  border: 3px solid #FBA1B7;
  text-decoration: none;
  transition: 0.3s ease;
  color: black;
  box-shadow: 0 3px 9px #FBA1B7;

  .top-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    p {
      font-size: 20px;
    }
  }

  .top-box-profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    img {
      width: 90px;
    }

    h3 {
      font-family: 'KCCMurukmuruk';
      font-size: 40px;
    }
  }

  .middle-box {
    display: flex;
    flex-direction: column;
    gap: 17px;
    height: 100%;

    > p {
      font-family: 'KCCMurukmuruk';
      font-size: 23px;
      padding-left: 15px;
    }

    .not-active-form {
      height: 100%;
      padding: 15px;
      border: 2px solid black;
      border-radius: 10px;
      font-size: 23px;
      background-color: #ffffff;
    }

    .active-form {
      height: 100%;
      padding: 15px;
      border: 2px solid black;
      border-radius: 10px;
      font-size: 23px;
      background-color: #ffd8e1;

      > textarea {
        font-family: 'KCCChassam';
        background: transparent;
        width: 100%;
        height: 100%;
        resize: none;
        font-size: 23px;
        border: none;
        outline: none;
      }
    }
  }

  .bottom-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;

    .bottom-box-right {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
  }
`

const DetailedBtn = styled.button`
  background-color: ${props => props.$btncolor};
  font-family: 'KCCChassam';
  width: 100px;
  height: 45px;
  border: 2px solid black;
  border-radius: 7px;
  color: #ffffff;
  transition: 0.4s ease-out;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    scale: 1.2;
  }

  &:active {
    scale: 1;
    transition: 0.05s ease-out;
  }
`

function Letter(props) {
  const { letters, setLetters } = props
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const content = location.state.content;

  const contentRef = useRef(content)
  const [isEditing, setIsEditing] = useState(false)
  const [editedMessage, setEditedMessage] = useState(content);

  const filtered = letters.find((item) => item.id === id);

  const deleteLetterHandler = () => {
    if (window.confirm(`정말 응원 메시지를 삭제하시겠습니까?\n삭제한 메시지는 복구할 수 없어요.`) === true) {
      const remainedLetters = letters.filter((letter) => {
        return letter.id !== filtered.id;
      })
      setLetters(remainedLetters);
      alert(`응원 메시지가 삭제되었습니다.\nHome으로 이동합니다.`);
      navigate("/");
    } else {
      return false;
    }
  }

  const editHandler = () => {
    setIsEditing(!isEditing);
  }

  useEffect(() => {
    if (isEditing) {
      const messageLength = contentRef.current.value.length;
      contentRef.current.focus();
      contentRef.current.setSelectionRange(messageLength, messageLength);
    }
  }, [isEditing]);

  const editedTypeHandler = (event) => {
    setEditedMessage(event);
  }

  const editedAddHandler = (e) => {
    e.preventDefault();
    if (content === editedMessage) {
      alert("변경 사항이 없습니다.");
    } else {
      if (window.confirm("응원 메시지를 변경하시겠습니까?") === false) {
        return;
      } else {
        const newEditedLetters = letters.map((letter) =>
          letter.id === id ? { ...letter, content: editedMessage } : letter);
        setLetters(newEditedLetters);
        alert(`응원 메시지가 변경되었습니다.\nHome으로 이동합니다.`);
        setIsEditing(false);
        navigate("/");
      }
    }
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <>
          <DetailedLetter>
            <div className='top-box'>
              <div className='top-box-profile'>
                <img src={filtered.avatar}></img>
                <h3>{filtered.nickname}</h3>
              </div>
              <p>{filtered.createdAt}</p>
            </div>
            <div className='middle-box'>
              <p>To : {filtered.writedTo}</p>
              <form className='active-form'>
                <textarea ref={contentRef} value={editedMessage} onChange={e => editedTypeHandler(e.target.value)}>{editedMessage}</textarea>
              </form>
            </div>
            <div className='bottom-box'>
              <span></span>
              <div className='bottom-box-right'>
                <DetailedBtn $btncolor={"#90a4ff"} type="submit" onClick={editedAddHandler} >수정완료</DetailedBtn>
                <DetailedBtn $btncolor={"#e64f4f"} onClick={deleteLetterHandler}>삭제</DetailedBtn>
              </div>
            </div>
          </DetailedLetter>
        </>
      ) : (
        <>
          <DetailedLetter>
            <div className='top-box'>
              <div className='top-box-profile'>
                <img src={filtered.avatar}></img>
                <h3>{filtered.nickname}</h3>
              </div>
              <p>{filtered.createdAt}</p>
            </div>
            <div className='middle-box'>
              <p>To : {filtered.writedTo}</p>
              <form className='not-active-form'>
                <p>{editedMessage}</p>
              </form>
            </div>
            <div className='bottom-box'>
              <DetailedBtn $btncolor={"#ff90ac"} onClick={() => { navigate("/") }}>Home</DetailedBtn>
              <div className='bottom-box-right'>
                <DetailedBtn $btncolor={"#90a4ff"} onClick={editHandler}>수정</DetailedBtn>
                <DetailedBtn $btncolor={"#e64f4f"} onClick={deleteLetterHandler}>삭제</DetailedBtn>
              </div>
            </div>
          </DetailedLetter>
        </>
      )
      }
    </>
  )
}

export default Letter