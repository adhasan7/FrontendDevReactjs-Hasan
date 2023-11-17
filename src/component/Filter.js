import { useState } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";

function Filter() {
  const navigate = useNavigate();
  const hendleClear = () => {
    setSearch("");
    navigate("/");
  };

  const hendleSearch = () => {
    const filters = {
      search: search,
    };
    const queryParams = qs.stringify(filters, { addQueryPrefix: true });
    navigate("/" + queryParams);
  };
  const [search, setSearch] = useState("");

  return (
    <ul className='flex gap-5 '>
      <li>Filter By :</li>
      <li>
        <select className='select-bordered select select-sm'>
          <option>Open Now</option>
        </select>
      </li>
      <li>
        <select className='select-bordered select select-sm'>
          <option>0-20</option>
          <option>21-30</option>
          <option>31-50</option>
        </select>
      </li>
      <li>
        <select className='select-bordered select select-sm'>
          <option>Samsung</option>
          <option>Laptop</option>
        </select>
      </li>

      <li>
        <input
          className='input input-bordered input-sm'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </li>
      <li>
        <button className='btn btn-sm' onClick={hendleSearch}>
          search
        </button>
      </li>
      <li>
        <button className='btn btn-sm' onClick={hendleClear}>
          Clear All
        </button>
      </li>
    </ul>
  );
}
export default Filter;
