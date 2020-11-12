/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import React from "react";
import "./App.css";
import SeatingMap from "./components/SeatingMap/SeatingMap";

function App() {
  return (
    <div className="App">
      <h1
        css={css`
          margin-bottom: 54px;
        `}
      >
        Cloudcannon Seating
      </h1>
      <SeatingMap css={css`max-width: 1000px;`} />
    </div>
  );
}

export default App;
