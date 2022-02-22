import { ChangeEvent, ReactElement } from "react";
import { IFilter } from "../models/api.interface";
import { Input } from "./common";

type SearchBarProps = {
  handleFilterChange: (filter: IFilter) => void;
};

function SearchBar({ handleFilterChange }: SearchBarProps): ReactElement {
  const onSearchQueryChage = (event: ChangeEvent<HTMLInputElement>): void => {
    handleFilterChange({
      name: event.target.value,
    });
  };

  return (
    <div className="flex flex-grow rounded-md py-5 space-x-3">
      <Input onChange={onSearchQueryChage} />
    </div>
  );
}

export default SearchBar;
