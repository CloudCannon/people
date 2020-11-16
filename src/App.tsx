/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import React from "react";
import "./App.css";
import SeatingMap from "./components/SeatingMap/SeatingMap";
import "./antd.css";
import { List, Avatar } from "antd";
import People from "./data/seats.json";

// const data = [
//   {
//     title: "Ant Design Title 1",
//   },
//   {
//     title: "Ant Design Title 2",
//   },
//   {
//     title: "Ant Design Title 3",
//   },
//   {
//     title: "Ant Design Title 4",
//   },
// ];

const data = Object.entries(People).map(([index, seat]) => ({
  ...seat
}));

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
        <div className="list-wrapper" css={css`
          max-height: 100vh;
          overflow: auto;
        `}>
          <List
            css={css`
              width: 400px;
            `}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.profileImage} />
                  }
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.title}
                />
              </List.Item>
            )}
          />
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
