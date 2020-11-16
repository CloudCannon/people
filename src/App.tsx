/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import React from "react";
import "./App.css";
import SeatingMap from "./components/SeatingMap/SeatingMap";
import "./antd.css";
import { List, Avatar } from "antd";
import People from "./data/seats.json";
import { AutoComplete } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  const [value, setValue] = React.useState("");
  const [options, setOptions] = React.useState<{ value: string }[]>([]);

  return (
    <div className="App">
      <h1
        css={css`
          margin-bottom: 54px;
        `}
      >
        Cloudcannon People
      </h1>
      <p>
        <a href="https://github.com/CloudCannon/people/issues">
          Add a feature request
        </a>
      </p>
      <main
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
        `}
      >
        <div
          className="list-wrapper"
          css={css`
            max-height: 100vh;
            overflow: auto;
          `}
        >
          <Sidebar people={People} />
        </div>
        <SeatingMap
          seats={People}
          css={css`
            max-width: 1000px;
            width: 100%;
          `}
        />
      </main>
    </div>
  );
}

export default App;
