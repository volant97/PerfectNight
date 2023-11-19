import React, { useState, useEffect } from 'react'
import Router from "shared/Router";
import Reset from 'Reset';
import styled from "styled-components";
import Music from 'components/Music';


const AppBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`

function App() {
  const [artistData, setArtistData] = useState([]);
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const jsonData = require("fakeData");
    setArtistData([...jsonData.artist]);
    setDummyData([...jsonData.dummy]);
  }, [])
  if (artistData.length <= 0 || dummyData.length <= 0) {
    return <div>데이터를 가져오는 중...</div>
  }

  return (
    <>
      <Reset />
      <AppBox>
        <Music />
        <Router
          artistData={artistData}
          dummyData={dummyData}
        />
      </AppBox>
    </>
  )
}

export default App;