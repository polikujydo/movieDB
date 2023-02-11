/*jshint esversion: 6 */ 
const numberOfMovies = +prompt ('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Very latest watched movie?', ''),
      b = prompt('What is your grade', ''),
      c = prompt('Very latest watched movie?', ''),
      d = prompt('What is your grade', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);