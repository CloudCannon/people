/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import React from "react";
import "./App.css";
import SeatingMap from "./components/SeatingMap/SeatingMap";
import "./antd.scss";
import { List, Avatar } from "antd";
import People from "./data/seats.json";
import { AutoComplete } from "antd";
import SearchSidebar from "./components/Sidebar/SearchSidebar";
import InfoSidebar from "./components/Sidebar/InfoSidebar";

const App: React.FC = () => {
  const [currentPerson, setCurrentPerson] = React.useState<
    typeof People[keyof typeof People] | null
  >(null);
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
          flex-wrap: no-wrap;
          align-items: flex-start;
        `}
      >
        <aside
          className="list-wrapper"
          css={css`
            max-height: 100vh;
            overflow: auto;
          `}
        >
          <SearchSidebar
            people={People}
            onPersonSelect={(person) => setCurrentPerson(People[person])}
          />
        </aside>
        <SeatingMap
          seats={People}
          css={css`
            max-width: 1000px;
            width: 100%;
          `}
        />{" "}
        {currentPerson && (
          <aside
            className="list-wrapper"
            css={css`
              max-height: 100vh;
              overflow: auto;
            `}
          >
            <InfoSidebar person={currentPerson} />
          </aside>
        )}
      </main>
    </div>
  );
};

export default App;
