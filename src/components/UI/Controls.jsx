import { useEffect, useState } from "react";
import Search from "./Search";
import { CustomSelect } from "./Select";

const options = [
  { value: "Africa", label: "Afrivca" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

function Controls() {
  const [search, setSearch] = useState();
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect options={options}/>
    </div>
  );
}

export default Controls;
