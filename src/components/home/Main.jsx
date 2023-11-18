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
  /* border: 2px solid black; */
`

const CreateBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 180px;
  border: 2px solid black;
`

const LetterBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  width: 100%;
  height: 100%;
  padding: 20px 0 ;
  border: 2px solid black;

  .letter-card {
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

    &:hover {
      transform: scale(1.02);
      background-color: #ffdde5;
  }
  }

  .letter-card-left {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    /* border: 2px solid black; */
  }

  .letter-card-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    width: 100%;
    height: 100%;
    /* border: 2px solid black; */
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



  // const cardClickHandler = (id) => {
  //   navigate(`/letter${id}`)
  // }


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
            avatar: "사진"
          };
          if (nickname.length <= 0 || content.length <= 0) {
            alert("닉네임과 내용을 모두 입력해주세요💌")
          } else {
            setLetters([newLetters, ...letters]);
            setNickname("")
            setContent("")
          }
        }}>
        <div>
          <h3>닉네임</h3>
          <input
            type='text'
            placeholder='최대 20글자까지 작성할 수 있습니다.'
            value={nickname}
            onChange={event => { setNickname(event.target.value) }}
          />
        </div>
        <div>
          <h3>내용</h3>
          <input
            type='text'
            placeholder='최대 100글자까지 작성할 수 있습니다.'
            value={content}
            onChange={event => { setContent(event.target.value) }}
          />
        </div>
        <div>
          <h3>누구에게 보내실 건가요?</h3>
          <select
            value={writedTo}
            onChange={event => {
              setWritedTo(event.target.value)
            }}>
            {artistData.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
          </select>
          <button type="submit">팬레터 등록</button>
        </div>
      </CreateBox>

      <LetterBox>
        {letters.filter(lett => {
          return selected[lett.writedTo]
        }).map(letter => {
          return (
            <Link
              className='letter-card'
              key={letter.id}
              // onClick={() => cardClickHandler(letter.id)}
              to={`/letter/${letter.id}`}
              state={{
                nickname: letter.nickname,
                content: letter.content,
                createdAt: letter.createdAt,
                writedTo: letter.writedTo,
              }}
            >
              <div className='letter-card-left'>
                <img src={userProfile}></img>
              </div>
              <div className='letter-card-right'>
                <h3>{letter.nickname}</h3>
                <p className='letter-card-content'>{letter.content}</p>
                <p>{letter.createdAt}</p>
                <p>{letter.writedTo}</p>
              </div>
            </Link>
          )
        })
        }
      </LetterBox>

    </MainOutLine >
  )
}

export default Main