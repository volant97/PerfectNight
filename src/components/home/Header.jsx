import React from 'react'
import styled from "styled-components";
import BorderCheck from 'components/BorderCheck';
import Button from 'components/home/Button';
import LESSERAFIM2 from 'assets/르세라핌2.jpg';

const HeaderOutLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;

  width: 100%;
  height: 300px;
  border: 2px solid black;

  background-image: url(${LESSERAFIM2});
  background-size: cover;
  background-position: 50% 30%;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: #000;
  }

  h1,h2,p,Button {
    position: relative;
  }

  h1,h2,p {
    color: white;
  }
`

function Header(props) {
  const { artistData, dummyData, selected, setSelected, btnClicked, setBtnClicked, writedTo, setWritedTo } = props;

  return (
    <HeaderOutLine color="green">
      <h1>Perfect Night</h1>
      <h2>LE SSERAFIM</h2>
      <p>2023.10.27</p>
      <Button
        artistData={artistData}
        selected={selected}
        setSelected={setSelected}
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
        writedTo={writedTo}
        setWritedTo={setWritedTo} />
    </HeaderOutLine>
  )
}

export default Header