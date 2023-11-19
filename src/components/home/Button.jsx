import React from 'react'
import styled from "styled-components";

const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    position: relative;
    top: 4%;
  `

const ArtistBtn = styled.button`
    font-family: 'KCCMurukmuruk';
    font-size: 16px;
    background: transparent;
    background-color: ${props => props.$boxcolor};
    color: ${props => props.$textcolor};
    width: 100px;
    height: 40px;
    border: 1px solid rgb(256, 256, 256, 0.7);
    box-shadow: 0px 3px 5px #000000;
    box-shadow: 0px 5px 5px #000000;
    border-radius: 20px;
    transition: 0.4s ease-out;
    margin: 0 30px;
    cursor: pointer;
   
    &:hover {
      background-color: #ff668c;
      scale: 1.3;
      margin: 0 40px;
    }

    &:active {
      background-color: #ff90ac;
      scale: 1;
      margin: 0 20px;
      transition: 0.07s ease-out;
    }
  `


function Button(props) {
  const { artistData, selected, setSelected, btnClicked, setBtnClicked, writedTo, setWritedTo } = props;

  const allFalse = {
    허윤진: false,
    사쿠라: false,
    김채원: false,
    카즈하: false,
    홍은채: false,
  }

  function select(selectedName) {
    setSelected({ ...allFalse, [selectedName]: true })
    setBtnClicked(selectedName)
    setWritedTo(selectedName)
  }


  return (
    <ButtonBox>
      {artistData.map(artist => {
        return (
          <ArtistBtn
            key={artist.id}
            value={artist.name}
            onClick={(e) => { select(e.target.value) }}
            $boxcolor={selected[artist.name] ? "#ff90ac" : "#0c1b4b"}
            $textcolor={selected[artist.name] ? "#0c1b4b" : "#ffffff"}
          >
            {artist.name}
          </ArtistBtn>
        )
      })}
    </ButtonBox>
  )
}

export default Button