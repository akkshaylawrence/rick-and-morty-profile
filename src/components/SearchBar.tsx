import { ChangeEvent, ReactElement } from "react";
import { noop } from "../constants";
import { IFilter } from "../models/api.interface";
import { Input, Button } from "./common";

type SearchBarProps = {
  handleFilterChange: (filter: IFilter) => void;
  onSearch?: () => void;
};

const defaultProps = {
  onSearch: noop,
};

function SearchBar({
  handleFilterChange,
  onSearch,
}: SearchBarProps): ReactElement {
  const onSearchQueryChage = (event: ChangeEvent<HTMLInputElement>): void => {
    handleFilterChange({
      name: event.target.value,
    });
  };

  return (
    <div className="w-full flex rounded-md py-5 mt-5 space-x-3">
      <Input onChange={onSearchQueryChage} />
      <Button onClick={onSearch} />
    </div>
  );
}

SearchBar.defaultProps = defaultProps;

export default SearchBar;
