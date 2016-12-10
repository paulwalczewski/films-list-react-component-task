import films from './../mocks/films';

const Api = {
  getFilmsList() {
    return films;
  },
  
  getCompaniesList() {
    const uniqueCompanies = [];
    films.map(film => {
        if (uniqueCompanies.indexOf(film.company) === -1) {
            uniqueCompanies.push(film.company)
        }
    });

    return uniqueCompanies;
  }
}

export default Api;
