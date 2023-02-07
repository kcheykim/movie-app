import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=1cc6fec0'

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }
    useEffect(() =>{
        searchMovies('Spiderman');
    }, []);
    return (
        <div className='app'>
            <h1>MovieApp</h1>
            <div className='search'>
                <input
                placeholder='Search for movies'
                value='Superman'
                onChange={() => {}}
                />
                <img
                    src={searchIcon} 
                    alt='search'
                    onClick={() => {}}
                />
            </div>

            <div className='container'>
                <div className='movie'></div>
                <div>
                    <p>{movie1.Year}</p>
                </div>

                <div>
                    <img src={movie1.Poster} alt={movie1.Title} />
                </div>
            </div>
        </div>
    );
}
export default App;