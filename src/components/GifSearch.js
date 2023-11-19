import React, { useState } from "react";

const GifSearch = ({ onSubmit }) => {
    // state to store value of input
    const [searchTerm, setSearchTerm] = useState("");

    // The input field is a controlled component, meaning its value is controlled by React state.
    // event handler for input change
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // inoking the cb prop with the search term
        onSubmit(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Giphy Search:
                {/* The input field is a controlled component, meaning its value is controlled by React state. */}
                <input type="text" value={searchTerm} onChange={handleChange} />
            </label>
            <button type="submit">Search</button>
        </form>
    );
}

export default GifSearch;