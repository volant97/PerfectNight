import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

function Letter() {
  const navigate = useNavigate();

  return (
    <>
    <div>Letter</div>
    <button onClick={()=>{navigate("/")}}>이동</button>
    </>
  )
}

export default Letter