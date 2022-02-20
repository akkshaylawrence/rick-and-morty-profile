import { ReactElement } from "react";
import { IFilter } from "../models/api.interface";
import { Input, Button } from "./common";

type SearchBarProps = {
  handleFilterChange?: (filter: IFilter) => void;
};

const defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleFilterChange: () => {},
};

function SearchBar({ handleFilterChange }: SearchBarProps): ReactElement {
  return (
    <div className="w-full flex border rounded-md p-10 my-5 space-x-3">
      <Input />
      <Button />
    </div>
  );
}

SearchBar.defaultProps = defaultProps;

export default SearchBar;
