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
  const { artistData, dummyData, letters, setLetters } = props
  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    허윤진: false,
    사쿠라: false,
    김채원: true,
    카즈하: false,
    홍은채: false,
  })
  const [btnClicked, setBtnClicked] = useState("김채원")
  const [writedTo, setWritedTo] = useState(btnClicked);




  return (
    <HomeBox>
      <Header
        artistData={artistData}
        dummyData={dummyData}
        selected={selected}
        setSelected={setSelected}
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
        writedTo={writedTo}
        setWritedTo={setWritedTo} />
      <Main
        artistData={artistData}
        dummyData={dummyData}
        selected={selected}
        setSelected={setSelected}
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
        writedTo={writedTo}
        setWritedTo={setWritedTo}
        navigate={navigate}
        letters={letters}
        setLetters={setLetters} />

      <button onClick={() => { navigate("/letter") }}>이동</button>
    </HomeBox>
  )
}

export default Home