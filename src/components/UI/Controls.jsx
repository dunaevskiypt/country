import { useEffect, useState } from "react";
import { Search } from "./Search";

function Controls() {
    const [search,setSearch] = useState( )
  return <div>
    <Search search={search} setSearch={setSearch}/>
  </div>;
}

export default Controls;
