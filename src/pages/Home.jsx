import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Header from "components/home/Header";
import Main from "components/home/Main";

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 900px;
`

function Home(props) {
  const { artistData, letters, setLetters, selected, setSelected, btnClicked, setBtnClicked, writedTo, setWritedTo } = props

  return (
    <HomeBox>
      <Header
        artistData={artistData}
        selected={selected}
        setSelected={setSelected}
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
        writedTo={writedTo}
        setWritedTo={setWritedTo} />
      <Main
        artistData={artistData}
        selected={selected}
        setSelected={setSelected}
        btnClicked={btnClicked}
        writedTo={writedTo}
        setWritedTo={setWritedTo}
        letters={letters}
        setLetters={setLetters} />
    </HomeBox>
  )
}

export default Home