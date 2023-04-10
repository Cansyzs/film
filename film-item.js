class FilmItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

    set film(film) {
        this._film = film;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host{
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        
        .poster {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        
        .film-info {
          padding: 24px;
        }
        
        .film-info > h2 {
          font-weight: lighter;
        }
        
        .film-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
        .film-info > h5 {
          color: red;
          text-align: center;
        }
        </style>
        <img class="poster" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${this._film.poster_path}" alt="Poster">
        <div class="film-info">
          <h2>${this._film.title}</h2>
          <p>${this._film.overview}</p><br>
          <h5>Telah ditonton sebanyak : ${this._film.popularity} kali</h5>
          <h5>Rating Film : ${this._film.vote_average}</h5>
        </div>
      `;
    }
}

customElements.define('film-item', FilmItem)