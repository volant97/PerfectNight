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

  width: 1000px;
`



function Home() {
  const navigate = useNavigate();
  const [artistData, setArtistData] = useState([]);
  const [dummyData, setDummyData] = useState([]);
  const [selected, setSelected] = useState({
    허윤진: false,
    사쿠라: false,
    김채원: true,
    카즈하: false,
    홍은채: false,
  })
  const [btnClicked, setBtnClicked] = useState("김채원")
  const [writedTo, setWritedTo] = useState(btnClicked); //artistData[2].name

  // console.log("btnClicked : " + btnClicked)


  useEffect(() => {
    const jsonData = require("fakeData");
    setArtistData([...jsonData.artist]);
    setDummyData([...jsonData.dummy]);
  }, [])

  if (artistData.length <= 0 || dummyData.length <= 0) {
    return <div>데이터를 가져오는 중...</div>
  }





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
        setWritedTo={setWritedTo} />

      <button onClick={() => { navigate("/letter") }}>이동</button>
    </HomeBox>
  )
}

export default Home