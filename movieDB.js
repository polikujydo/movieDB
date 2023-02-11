let numberOfMovies;

function start() {
     numberOfMovies = +prompt ('How many movies have you watched?', '');

     while(numberOfMovies == "" || numberOfMovies == null  || isNaN(numberOfMovies)) {
        numberOfMovies = +prompt ('How many movies have you watched?', '');  
     }

}

start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyMovies() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Very latest watched movie?', ''),
              b = prompt('What is your grade', '');
    
        if (a != null && b != null && a != "" && b != "" && a.length < 10){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    } 
}

rememberMyMovies();

function detectMovieLevel(){
    if (personalMovieDB.count < 10){
        console.log("few movies has been watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log("typical viewer");
    } else{
        console.log('movielover');
    }
}

detectMovieLevel();

function showMyDB(hidden){
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Your favouite movie by number ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
