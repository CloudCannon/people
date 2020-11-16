/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import React from "react";
import "./App.css";
import SeatingMap from "./components/SeatingMap/SeatingMap";
import "./antd.css";

function App() {
  return (
    <div className="App">
      <h1
        css={css`
          margin-bottom: 54px;
        `}
      >
        Cloudcannon People  
      </h1>
      <SeatingMap css={css`max-width: 1000px;`} />
      <p><a href="https://github.com/CloudCannon/people/issues">Add a feature request</a></p>
    </div>
  );
}

export default App;
