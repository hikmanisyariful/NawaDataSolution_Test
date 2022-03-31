import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import SortCharacter from "./SortCharacter";
import Psbb from "./Psbb";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />}>
          <Route path="sortCharacter" element={<SortCharacter />} />
          <Route path="psbb" element={<Psbb />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
