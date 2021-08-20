import { useState, useEffect } from "react";

const SearchPhotos = () => {

}
const PhotoSearch = () => {
    const [search, setSearch] = useState<string>();

    useEffect(() => {
        SearchPhotos();
    }, [])
    return (
        <>
            <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event?.target.value)}
                placeholder="Search Images"
                className="rounded-lg shadow-lg border-gray-300 border-2 bg-gray-200 bg-opacity-40 flex justify-center items-center h-9 mb-1"
              />
        </>
    );
}
export default PhotoSearch;