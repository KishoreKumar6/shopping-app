function SearchBar({onSearch}) {

    return (
        <>
            <input
                type="text"
                placeholder="Search for products"
                onChange={(e) => onSearch(e.target.value)}
                className="border p-2 rounded w-full"
            />
        </>
    )

}

export default SearchBar