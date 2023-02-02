import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8eebdd0d4c0711ecc6d0407ee234050c',
    language: 'es-ES',
  },  
});

 
export default movieDB;
