import { ReactElement } from "react";
import { IFilter } from "../models/api.interface";
import { Input, Button } from "./common";

type SearchBarProps = {
  handleFilterChange: (filter: IFilter) => void;
  onSearch?: () => void;
};

const defaultProps = {
  onSearch: () => {
    // do nothing.
  },
};

function SearchBar({
  handleFilterChange,
  onSearch,
}: SearchBarProps): ReactElement {
  const onSearchQueryChage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleFilterChange({
      name: event.target.value,
    });
  };

  return (
    <div className="w-full flex border rounded-md p-10 my-5 space-x-3">
      <Input onChange={onSearchQueryChage} />
      <Button onClick={onSearch} />
    </div>
  );
}

SearchBar.defaultProps = defaultProps;

export default SearchBar;
