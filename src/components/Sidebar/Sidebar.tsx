/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { AutoComplete, Avatar, List } from "antd";
import React from "react";
import People from "../../data/seats.json";

/**
 * Interface for Component props
 */
export interface ComponentProps {
  children?: any;
  people: typeof People;
}

/**
 *  A Component component.
 */
const Component: React.FC<ComponentProps> = (props) => {
  const [data, setData] = React.useState<Array<Record<string, any>> | null>(
    null
  );

  const [searchValue, setSearchValue] = React.useState<string>("");

  const onUpdate = (change: string) => {
    setSearchValue(change);

    const data = Object.entries(props.people)
      .filter(([index, item]) => {
        // Filter by search term
        if (!searchValue) {
          return true;
        }
        const lowercaseSearchValue = searchValue.toLowerCase()
        if (item.title.toLowerCase().includes(lowercaseSearchValue)) {
          return true;
        }
        if (item.name.toLowerCase().includes(lowercaseSearchValue)) {
          return true;
        }
        return false;
      })
      .map(([index, seat]) => ({
        ...seat,
      }));

    setData(data);
  };

  React.useEffect(() => {
    onUpdate('');
  }, []);

  return (
    <React.Fragment>
      <AutoComplete
        onSelect={onUpdate}
        style={{ width: 200 }}
        onSearch={onUpdate}
        placeholder="Search for a Clöudcannoneer"
      />
      <List
        css={css`
          width: 400px;
        `}
        itemLayout="horizontal"
        dataSource={data ?? undefined}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.profileImage} />}
              title={item.name}
              description={item.title}
            />
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default Component;
