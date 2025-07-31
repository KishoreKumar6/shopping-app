function Filter({ onFilter }) {
  return (
    <select
      onChange={(e) => onFilter(e.target.value)}
      className="border-3 p-2 rounded w-full"
    >
      <option value="" className=" text-blue-500 font-bold">
        All
      </option>
      <option value="men's clothing" className=" text-blue-500 font-bold">
        Men's clothing
      </option>
      <option value="women's clothing" className=" text-blue-500 font-bold">
        Women's clothing
      </option>
      <option value="jewelery" className=" text-blue-500 font-bold">
        Jewelery
      </option>
      <option value="electronics" className=" text-blue-500 font-bold">
        Electronics
      </option>
    </select>
  );
}

export default Filter;
