/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let result = [];
  let movieTitle;
  for (let i = 0; i < movies.length; i++) {
     movieTitle = movies[i].title;
    result.push(movieTitle);
  }
  return result;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  let test = 0;
  let highest;
  if (movies.length < 1) {
    return test;
  } else {
    highest = movies[0].metascore;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].metascore > highest) {
        highest = Number(movies[i].metascore); 
      }
    }
    return highest;
  }
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let count = 0; 
  let sum = 0;
  let rating = 0;
  let average = 0
  if (movies.length < 1) {
    return average;
  } else {
    for (let movie of movies) {
      for (let i = 0; i < movie.ratings.length; i++) {
        if (movie.ratings[i].value.includes("/") === true) {
          let slashRating = movie.ratings[i].value.split("/");
          slashRating[0] = Number(slashRating[0]);
          slashRating[1] = Number(slashRating[1]);
          rating = (slashRating[0] / slashRating[1]);
          sum += rating;
          count += 1
        } 
        if (movie.ratings[i].value.includes("%")) {
            rating = movie.ratings[i].value;
            rating = rating.replace("%", "")
            rating = Number("0." + rating)
            sum += rating;
            count += 1
        }
      }
    }

  average = sum / count
  return average;
}
}
// for (let i = 0; i < movies.length; i++) {
//   for (let j = 0; j < movies[i].ratings.length; i++) {
//     //includes /
//     if (movies[i].ratings[j].value.includes("/") === true) {
//       let slashRating = movies[i].ratings[j].value.split("/");
//       slashRating[0] = Number(slashRating[0]);
//       slashRating[1] = Number(slashRating[1]);
//       rating = (slashRating[0]/slashRating[1]);
//       sum += rating;
//       count += 1
//     }
//     //includes %
//     if (movies[i].ratings[j].value.includes("%")) {
//       rating = movies[i].ratings[j].value;
//       rating = rating.replace("%", "");
//       rating = Number("0." + rating)
//       sum += rating
//       count += 1
//   }
// }
// }
/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let result = {};
  if (movies.length < 1) {
    return result;
  } else {
  for (const movie of movies) {
    let ratingKey = movie.ratings;
    let count = 0
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].ratings === Key){
        count += 1;
      }
      result[Key] = count;
    }
  }
    return result;
}
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let result;
  let error = null
 for (let i = 0; i < movies.length; i++) {
  let doesIDMatch = false
  // If the inputted `movies` array is empty or the ID does not match any movie, return `null`
    if (movies.length < 1) {
      return error;
    } else if (id === movies[i].imdbID) {
      doesIDMatch = true;
    } result = doesIDMatch = true ? movies[i] : error
    return result;
}

}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let result = [];
  if (movies.length < 0) {
    return null;
  } else {
  let capitalizedGenre = genre.split("");
  let shiftCapitalizedGenre = capitalizedGenre.shift()
  shiftCapitalizedGenre = shiftCapitalizedGenre.toUpperCase();
  capitalizedGenre.unshift(shiftCapitalizedGenre);
  capitalizedGenre.join("");
  for (let i = 0; i < movies.length; i++) {
    let genres = movies[i].genre.split(", ")
    for (let pgenre of genres) {
      if (genre = pgenre) {
      result.push(pgenre)
      } else {}
    }
  } return result;
}
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear() {}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
