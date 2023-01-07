import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom'; 
import {fetchMoviesBySearchQuery} from 'components/fetch/Fetch';
import Loading from 'components/loading/Loading';
import noImage from '../../images/no-image.png';
import { ListMovies, ListItem, StyledLink, ListBox, Form, Button, Input } from './MoviesStyled';

const Movies = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams({});
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false)
    const searchQuery = searchParams.get('movie');

    const handleChange = e => {
        setQuery( e.target.value );
    };

       
    const handleSubmit = e => {
        e.preventDefault();  
        // setSearchParams({ movie: query });
        setSearchParams( { movie: query } || {})
        setQuery('');
    };     
    

    useEffect(() => {  
        if(searchQuery) { 
          setLoading(true)   
          fetchMoviesBySearchQuery(searchQuery).then(setMovies)
         .catch(error => console.log(error))
         .finally(setLoading(false))
        } 

        if(!movies){
          return;
        }
    }, [searchQuery, movies]);
 

    return(
        <ListBox>
         <Form onSubmit={handleSubmit}>
            <Button type="submit">
              <span>Search</span>
            </Button>
  
            <Input
              onChange={handleChange}
              name="name"
              type="text"
              value={query}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
          {loading && <Loading/>}

          {movies && (
          <ListMovies>
            {movies.map(({ id, title, name, poster_path }) => {
              return (
                <ListItem key={id}>
                  <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                   
                  <img src={
                poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}`: noImage} alt={title}  width={260}
                height={340} />
                 {title || name}
                  </StyledLink>
                </ListItem>
              );
            })}
          </ListMovies>
        )}
        </ListBox>
    )
}

export default Movies;