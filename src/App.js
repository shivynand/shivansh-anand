import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Landing from "./views/Landing page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shivansh-anand" element={<Landing />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
