
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt ('How many movies have you watched?', '');
   
        while(personalMovieDB.count == "" || personalMovieDB.count == null  || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('How many movies have you watched?', '');  
        }
   
   },
   rememberMyMovies: () => {
    for (let i = 0; i < 2; i++){
        const a = prompt('Very latest watched movie?', '').trim(),
              b = prompt('What is your grade', '');
    
        if (a != null && b != null && a != "" && b != "" && a.length < 10){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    } 
},
    detectMovieLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("few movies has been watched");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            console.log("typical viewer");
        } else{
            console.log('movielover');
        }
},
    showMyDB: function (hidden){
        if(!hidden) {
            console.log(personalMovieDB);
        }
},
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++){
            const genre = prompt(`Your favouite movie by number ${i}`);

            if (genre == "" || genre == null ){
                console.log("U've done something wrong");
            } else{
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, index)=>{
            console.log(`Favourite genre ${index + 1} - ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.private){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};





