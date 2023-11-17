import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Letter from "pages/Letter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="letter" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;