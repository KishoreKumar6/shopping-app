function Filter({onFilter}) {

    return (
        <select
            onChange={(e) => onFilter(e.target.value)}
            className="border p-2 rounded w-full"
            >
            <option value= "">All</option>
            <option value= "men's clothing">Men's clothing</option>
            <option value= "women's clothing">Women's clothing</option>
            <option value= "jewelery">Jewelery</option>
            <option value= "electronics">Electronics</option>
        </select>
    )

}

export default Filter