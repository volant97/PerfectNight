import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import userProfile from "assets/user-profile-64.png"
import { Link, useParams } from 'react-router-dom';
import uuid from 'react-uuid';

const MainOutLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`

const CreateBox = styled.form`
  font-family: 'KCCChassam';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;

  width: 450px;
  height: 180px;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  /* border: 3px solid #0c1b4b; */
  background-color: #1f316d;
  color: white;
  box-shadow: 0 3px 9px #1f316d;

  .nickname-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100%;

    h3 {
      width: 20%;
    }

    input {
      font-family: 'KCCChassam';
      width: 100%;
      height: 20px;
      border-radius: 5px;
      border: none;
      padding: 5px;
      outline: none;
    }
  }
  .content-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
    width: 100%;

    h3 {
      width: 20%;
      margin-top: 3px;
    }

    textarea {
      font-family: 'KCCChassam';
      width: 100%;
      height: 50px;
      resize: none;
      border-radius: 5px;
      border: none;
      padding: 5px;
      outline: none;
    }

  }
  .select-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 100%;
    
    select {
      font-family: 'KCCChassam';
      text-align: center;
      width: 100px;
      height: 23px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .submit-btn {
    font-family: 'KCCChassam';
    background: transparent;
    width: 100px;
    height: 27px;
    border: 2px solid white;
    border-radius: 7px;
    color: white;
    transition: 0.4s ease-out;
    cursor: pointer;

    &:hover {
      background-color: #ff668c;
      scale: 1.2;
    }

    &:active {
      background-color: #ff90ac;
      scale: 1;
      transition: 0.05s ease-out;
    }
  }
`

const LetterBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  width: 100%;
  min-height: 500px;
  padding: 20px 0 ;

  .letter-card {
    font-family: 'KCCChassam';
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    width: 450px;
    height: 150px;
    padding: 20px;
    border-radius: 20px;
    border: 3px solid #FBA1B7;

    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease;
    color: black;
    box-shadow: 0 3px 9px #FBA1B7;

    &:hover {
      transform: scale(1.05);
      background-color: #ffd8e1;
  }
  }

  .letter-card-left {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
  }

  .letter-card-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    width: 100%;
    height: 100%;

    h3 {
      font-family: 'KCCMurukmuruk';
      font-size: 22px;
    }

    h4 {
      font-size: 17px;
      padding-top: 2px;
    }

    p {
      font-size: 12px;
    }
  }

  .letter-card-content {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    width: 100%;
    max-height: 120px;
  }
`





function Main(props) {
  const { artistData, dummyData, selected, setSelected, btnClicked, setBtnClicked, writedTo, setWritedTo, navigate, letters, setLetters } = props;

  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");



  if (nickname.length > 20) {
    alert("닉네임은 20글자 이하로 작성해주세요😉")
  } else if (content.length > 100) {
    alert("내용은 100글자 이하로 작성해주세요😲")
  }



  const allFalse = {
    허윤진: false,
    사쿠라: false,
    김채원: false,
    카즈하: false,
    홍은채: false,
  }


  return (
    <MainOutLine>
      <CreateBox
        onSubmit={event => {
          event.preventDefault();
          const newLetters = {
            id: uuid(),
            nickname,
            content,
            createdAt: new Date().toLocaleString(),
            writedTo,
            avatar: userProfile,
          };
          if (nickname.length <= 0 || content.length <= 0) {
            alert("닉네임과 내용을 모두 입력해주세요💌")
          } else {
            setLetters([newLetters, ...letters]);
            setNickname("")
            setContent("")
            setSelected({ ...allFalse, [writedTo]: true })
          }
        }}>
        <div className='nickname-box'>
          <h3>닉네임</h3>
          <input
            type='text'
            placeholder='최대 20글자까지 작성할 수 있습니다.'
            value={nickname}
            onChange={event => { setNickname(event.target.value) }}
          />
        </div>
        <div className='content-box'>
          <h3>내용</h3>
          <textarea
            type='text'
            placeholder='최대 100글자까지 작성할 수 있습니다.'
            value={content}
            onChange={event => { setContent(event.target.value) }}
          />
        </div>
        <div className='select-box'>
          <h3>누구를 응원하실 건가요?</h3>
          <select
            value={writedTo}
            onChange={event => {
              setWritedTo(event.target.value)
            }}>
            {artistData.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
          </select>
          <button className='submit-btn' type="submit">팬레터 등록</button>
        </div>
      </CreateBox>

      <LetterBox>
        {letters.length === 0 ?
          (<h1>응원 메시지가 없어요. 첫 응원 메시지를 남겨주세요!</h1>)
          : (
            letters.filter(lett => {
              return selected[lett.writedTo]
            }).map(letter => {
              return (
                <Link
                  className='letter-card'
                  key={letter.id}
                  to={`/letter/${letter.id}`}
                  state={{
                    content: letter.content,
                  }}
                >
                  <div className='letter-card-left'>
                    <img src={userProfile}></img>
                  </div>
                  <div className='letter-card-right'>
                    <h3>{letter.nickname}</h3>
                    <h4 className='letter-card-content'>{letter.content}</h4>
                    <p>{letter.createdAt}</p>
                  </div>
                </Link>
              )
            }
            ))
        }

      </LetterBox>

    </MainOutLine >
  )
}

export default Main