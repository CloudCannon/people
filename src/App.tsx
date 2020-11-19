/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import React from "react";
import SeatingMap from "./components/SeatingMap/SeatingMap";
import "./antd.scss";
import { List, Avatar, Button } from "antd";
import People from "./data/seats.json";
import { AutoComplete } from "antd";
import SearchSidebar from "./components/Sidebar/SearchSidebar";
import InfoSidebar from "./components/Sidebar/InfoSidebar";

const App: React.FC = () => {
  const [currentPerson, setCurrentPerson] = React.useState<
    (typeof People[keyof typeof People] & { id: string }) | null
  >(null);
  return (
    <div
      css={css`
        max-width: 2000px;
        margin: 0 auto;
      `}
    >
      <header
        css={css`
          padding: 10px 30px;
          height: 137px;

          @media screen and (max-width: 600px) {
            height: auto;
          }
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
          justify-content: space-between;
          margin: 0 30px;
        `}
      >
        <div
          className="list-wrapper"
          css={css`
            max-height: calc(100vh - 137px);
            overflow: auto;
            min-width: 294px;
            /* margin-left: 20px; */
            margin-right: 20px;
          `}
        >
          <SearchSidebar
            people={People}
            onPersonSelect={(person) =>
              setCurrentPerson({ ...People[person], id: person })
            }
          />
        </div>
        <SeatingMap
          seats={People}
          activeSeat={currentPerson?.id}
          css={css`
            max-width: 1000px;
            width: 100%;
          `}
          onPersonSelect={(id) => {
            const key = id as keyof typeof People;
            setCurrentPerson(id ? { ...People[key], id } : null);
          }}
        />{" "}
        <div
          className="list-wrapper"
          css={css`
            width: 223px;
            max-height: 100vh;
            overflow: auto;
            flex-shrink: 0;
            padding: 0 44px;
          `}
        >
          <InfoSidebar
            person={currentPerson}
            onClose={currentPerson ? () => setCurrentPerson(null) : undefined}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
