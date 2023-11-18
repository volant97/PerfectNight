import React, { useEffect, useRef, useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";

function Letter(props) {
  const { letters, setLetters } = props
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  // const nickname = location.state.nickname;
  const content = location.state.content;
  // const createdAt = location.state.createdAt;
  // const writedTo = location.state.writedTo;

  // console.log("location", location.state)

  const contentRef = useRef(content)
  const [isEditing, setIsEditing] = useState(false)
  const [editedMessage, setEditedMessage] = useState(content);


  const filtered = letters.find((item) => item.id === id);

  const deleteLetterHandler = () => {
    if (window.confirm("응원 메시지를 삭제하시겠습니까?") === true) {
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
          <div className='letter-card-right'>
            <h3>{filtered.nickname}</h3>
            <form>
              <textarea className='letter-card-content' ref={contentRef} value={editedMessage} onChange={e => editedTypeHandler(e.target.value)}>{filtered.content}</textarea>
            </form>
            <p>{filtered.createdAt}</p>
            <p>{filtered.writedTo}</p>
          </div>
          <div>
            <button onClick={editHandler}>수정</button>
            <button type="submit" onClick={editedAddHandler} >수정완료</button>
            <button onClick={deleteLetterHandler}>삭제</button>
            <button onClick={() => { navigate("/") }}>Home</button>
          </div>
        </>
      ) : (
        <>
          <div className='letter-card-right'>
            <h3>{filtered.nickname}</h3>
            <form>
              <p className='letter-card-content'>{editedMessage}</p>
            </form>
            <p>{filtered.createdAt}</p>
            <p>{filtered.writedTo}</p>
          </div>
          <div>
            <button onClick={editHandler}>수정</button>
            <button type="submit" onClick={editedAddHandler} >수정완료</button>
            <button onClick={deleteLetterHandler}>삭제</button>
            <button onClick={() => { navigate("/") }}>Home</button>
          </div>
        </>
      )}
    </>
  )
}

export default Letter