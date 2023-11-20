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

  return (
    <>
      <Reset />
      <AppBox>
        <Music />
        <Router />
      </AppBox>
    </>
  )
}

export default App;