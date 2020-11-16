/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import React from "react";
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
    <div>
      <header
        css={css`
          padding: 20px 80px;
          height: 100px;
        `}
      >
        <h1>Cloudcannon People</h1>
        <p>
          <a href="https://github.com/CloudCannon/people/issues">
            Add a feature request
          </a>
        </p>
      </header>
      <main
        css={css`
          display: flex;
          flex-wrap: no-wrap;
          align-items: flex-start;
        `}
      >
        <div
          className="list-wrapper"
          css={css`
            max-height: 100vh;
            min-width: 294px;
            padding-left: 10px;
          `}
        >
          <SearchSidebar
            people={People}
            onPersonSelect={(person) => setCurrentPerson(People[person])}
          />
        </div>
        <SeatingMap
          seats={People}
          css={css`
            max-width: 1000px;
            width: 100%;
          `}
        />{" "}
        {currentPerson && (
          <div
            className="list-wrapper"
            css={css`
              max-height: 100vh;
              overflow: auto;
              flex-shrink: 0;
              padding: 0 44px;
            `}
          >
            <InfoSidebar
              person={currentPerson}
              onClose={() => setCurrentPerson(null)}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
