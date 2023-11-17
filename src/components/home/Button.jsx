import React from 'react'
import styled from "styled-components";

const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `
const ArtistBtn = styled.button`
    background: transparent;
    background-color: #b6a1a6;
    width: 100px;
    height: 40px;
    border: 1px solid black;
    border-radius: 20px;
    transition: 0.5s ease-out;

    &:hover {
      background-color: #FBA1B7;
      scale: 1.2;
      margin: 0 20px;
      transition: 0.5s ease-out;
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
          <ArtistBtn key={artist.id} value={artist.name} onClick={(e) => { select(e.target.value) }}>{artist.name}</ArtistBtn>
        )
      })}
    </ButtonBox>
  )
}

export default Button