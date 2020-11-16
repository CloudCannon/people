/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { AutoComplete, Avatar, List } from "antd";
import React from "react";
import People from "../../data/seats.json";

/**
 * Interface for SearchSidebar props
 */
export interface SearchSidebarProps {
  children?: any;
  people: typeof People;
  onPersonSelect?: (seatId: keyof typeof People) => void;
}

/**
 *  A SearchSidebar component.
 */
const SearchSidebar: React.FC<SearchSidebarProps> = (props) => {
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
        const lowercaseSearchValue = searchValue.toLowerCase();
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
        index,
      }));

    setData(data);
  };

  React.useEffect(() => {
    onUpdate("");
  }, []);

  return (
    <React.Fragment>
      <AutoComplete
        onSelect={onUpdate}
        style={{ width: "100%" }}
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
          <List.Item
            css={css`
              cursor: pointer;
            `}
            onClick={() => {
              if (props.onPersonSelect) {
                props.onPersonSelect(item.index);
              }
            }}
          >
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

export default SearchSidebar;
