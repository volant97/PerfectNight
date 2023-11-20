import { createContext, useMemo, useState, useEffect } from "react";

// Context의 initialState
// ...

// Context를 생성
export const LetterContext = createContext();

// Context의 Provider 생성
export function LetterContextProvider(props) {
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

  return <LetterContext.Provider value={value} {...props} />
}