import { ReactElement } from "react";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "./constants";
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
  const onFilterChange = (filter: IFilter): void => {
    handleFilterChange({ ...filter, page: 1 });
  };

  return (
    <div className="flex items-center justify-center md:justify-end p-2 bg-gray-50 border rounded-md mb-3">
      <div className="flex items-center space-x-2 px-3">
        <span className="font-bold text-gray-800">Status: </span>
        <Dropdown
          onChange={onFilterChange}
          label={currentFilter.status ? `${currentFilter.status}` : "All"}
          options={STATUS_OPTIONS}
          value={currentFilter.status || "All"}
          filterKey="status"
        />
      </div>
      <div className="flex items-center space-x-3 px-3">
        <span className="font-bold text-gray-800">Gender: </span>
        <Dropdown
          onChange={onFilterChange}
          label={currentFilter.gender ? `${currentFilter.gender}` : "All"}
          options={GENDER_OPTIONS}
          value={currentFilter.gender || "All"}
          filterKey="gender"
        />
      </div>
    </div>
  );
}

export default Filter;
