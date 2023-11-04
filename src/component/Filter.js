function Filter() {
  return (
    <ul className='flex'>
      <li>Filter By :</li>
      <li>
        <select>
          <option>Open Now</option>
        </select>
      </li>
      <li>
        <select>
          <option>0-20</option>
          <option>21-30</option>
          <option>31-50</option>
        </select>
      </li>
      <li>
        <select>
          <option>Samsung</option>
          <option>Laptop</option>
        </select>
      </li>
      <li></li>
    </ul>
  );
}
export default Filter;
