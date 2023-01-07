import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from '../home/Home';
import NotFoundPage from 'pages/notFoundPage/NotFoundPage';
import { StyledApp } from './AppStyled';
import Cast from '../cast/Cast';
import Reviews from '../reviews/Reviews';
import Layout from 'components/layout/Layout';


const Movie = lazy(() => import('../../pages/moviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../../pages/movieDetails/MovieDetails'));


export const App = () => {  

  return (
    <StyledApp>   
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index="/" element={<Home/>} />
          <Route path="movies" element={<Movie/>} />
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />  
        </Route>

      </Routes>
    </StyledApp>
  );
};
