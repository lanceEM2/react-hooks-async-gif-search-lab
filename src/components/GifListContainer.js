import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
    const [gifs, setGifs] = useState([]);
    // State to store the search 
    const [query, setQuery] = useState("");

    // Fetching data from the Giphy API
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=nZUWSVwdDDZjqbcr2zE86HBMZ1AucYsA"
            );
            const data = await response.json();
            const firstThreeGifs = data.data.slice(0, 3);
            setGifs(firstThreeGifs);
        } catch (error) {
            console.error("Error fetching data:" , error);
        }
    };

    // useEffect to fetch data 
    useEffect(() => {
        fetchData();
    }, [query]);

    // submit handler for GifSearch
    const handleSubmit = (newQuery) => {
        setQuery(newQuery);
    };

    return (
        <div>
            {/* Rendering GifSearch component */}
            <GifSearch onSubmit={handleSubmit} />
            {/* GifList component to pass a list of Gif's */}
            <GifList gifs={gifs} />
        </div>
    );
}

export default GifListContainer;