import React from "react";

 function SearchMovies() {

    const SearchMovies = async (e) => {
        e.preventDefault();
        console.log( "hiiiii",SearchMovies );
    }

    return (
        <form className = "form" onSubmit = {SearchMovies} >
            <label className = "label" htmlFor = "query" > Movie Name </label>
            <input className = "input" type = "text" name = "query"
            placeholder = "i.e. Jurassic Park"/>
            <button className = "button"  type = "submit"> Search </button>
        </form>
    )
}

export default SearchMovies;