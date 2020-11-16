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
    (typeof People[keyof typeof People] & { id: string }) | null
  >(null);
  return (
    <div>
      <header
        css={css`
          padding: 10px 80px;
          height: 137px;
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
