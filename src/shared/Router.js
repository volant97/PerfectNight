import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Home from "pages/Home";
import Letter from "pages/Letter";


const Router = (props) => {
  const { artistData, dummyData } = props

  const [letters, setLetters] = useState(dummyData)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home
          artistData={artistData}
          dummyData={dummyData}
          letters={letters}
          setLetters={setLetters}
        />} />
        <Route path="letter/:id" element={<Letter
          letters={letters}
          setLetters={setLetters}
        />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;