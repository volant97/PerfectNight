import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";

function Letter(props) {
  const { letters, setLetters } = props
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const nickname = location.state.nickname;
  const content = location.state.content;
  const createdAt = location.state.createdAt;
  const writedTo = location.state.writedTo;
  console.log(location.state)

  if (letters.length === 0) {
    <h1>데이터가 없습니다.</h1>
  }

  return (
    <>
      <div>Letter</div>
      <div>
        <div className='letter-card-left'>
        </div>
        <div className='letter-card-right'>
          <h3>{nickname}</h3>
          <p className='letter-card-content'>{content}</p>
          <p>{createdAt}</p>
          <p>{writedTo}</p>
        </div>
      </div>
      <button onClick={() => { navigate("/") }}>이동</button>
    </>
  )
}

export default Letter