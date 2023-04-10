import film from './film.js';

class DataSource {
    static searchFilm(keyword) {
      return fetch(`https://www.api.themoviedb.org/3/search/movie?api_key=a6cde89d201d32a114ab3913e84dc1d6&language=en-US&page=1&include_adult=false&query=${keyword}`)
          
            .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (responseJson.results.length !==0) {
              return Promise.resolve(responseJson.results);
            } else {
              return Promise.reject(`${keyword} is not found`);
            }
          });
    }
  }
  export default DataSource;