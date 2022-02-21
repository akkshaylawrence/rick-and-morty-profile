import { ReactElement } from "react";
import { STATUS_OPTIONS } from "../constants";
import { IFilter } from "../models/api.interface";
import { Dropdown } from "./common";

type FilterBarProps = {
  handleFilterChange: (filter: IFilter) => void;
  currentFilter: IFilter;
};

function Filter({
  handleFilterChange,
  currentFilter,
}: FilterBarProps): ReactElement {
  return (
    <div className="flex items-center justify-center space-x-3 p-2 border-2 rounded-md mb-2">
      <div className="flex items-center space-x-3 px-3">
        <span className="font-bold text-gray-800">Status: </span>
        <Dropdown
          onChange={handleFilterChange}
          label={`${currentFilter.status}` || "All"}
          options={STATUS_OPTIONS}
          value={currentFilter.status || "All"}
          filterKey="status"
        />
      </div>
    </div>
  );
}

export default Filter;
