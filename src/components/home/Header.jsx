import React from 'react'
import styled from "styled-components";
import Button from 'components/home/Button';
import LESSERAFIM2 from 'assets/르세라핌2.jpg';

const HeaderOutLine = styled.div`
  font-family: 'GoryeongStrawberry';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;

  width: 100%;
  height: 280px;
  border-radius: 10px;

  background-image: url(${LESSERAFIM2});
  background-size: cover;
  background-position: 50% 30%;
  box-shadow: 0 3px 9px #1f316d;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: #000;
    border-radius: 10px;
    transition: 0.4s ease-out;
  }

  h1,h2,p,Button {
    position: relative;
  }

  h1 {
    color: #ffffff;
    font-size: 50px;
    margin-top: 20px;
    transition: 0.4s ease-out;
  }

  h2 {
    color: #ffffffea;
    font-size: 20px;
    margin-top: 13px;
    transition: 0.4s ease-out;
  }

  p {
    color: #ffffffac;
    font-size: 10px;
    margin-bottom: 15px;
    transition: 0.4s ease-out;
  }

    &:hover{
    h1, h2, p {
      opacity: 0;
    }
    &::before {
      opacity: 0.1;
    }
  }
`

function Header(props) {
  const { artistData, dummyData, selected, setSelected, btnClicked, setBtnClicked, writedTo, setWritedTo } = props;

  return (
    <HeaderOutLine>
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