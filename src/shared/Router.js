import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "pages/Home";
import Letter from "pages/Letter";

const Router = (props) => {
  const { artistData, dummyData } = props;

  const [letters, setLetters] = useState(dummyData);

  const [selected, setSelected] = useState({
    허윤진: false,
    사쿠라: false,
    김채원: true,
    카즈하: false,
    홍은채: false,
  });
  const [btnClicked, setBtnClicked] = useState("김채원");
  const [writedTo, setWritedTo] = useState(btnClicked);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              artistData={artistData}
              letters={letters}
              setLetters={setLetters}
              selected={selected}
              setSelected={setSelected}
              btnClicked={btnClicked}
              setBtnClicked={setBtnClicked}
              writedTo={writedTo}
              setWritedTo={setWritedTo}
            />
          }
        />
        <Route
          path="letter/:id"
          element={<Letter letters={letters} setLetters={setLetters} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
