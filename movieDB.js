/*jshint esversion: 6 */ 
const numberOfMovies = +prompt ('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Very latest watched movie?', ''),
          b = prompt('What is your grade', '');

    if (a != null && b != null && a != "" && b != "" && a.length < 10){
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10){
    console.log("few movies has been watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
    console.log("typical viewer");
} else{
    console.log('movielower');
}

console.log(personalMovieDB);