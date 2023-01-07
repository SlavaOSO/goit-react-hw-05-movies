import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from "components/fetch/Fetch";
import Loading from 'components/loading/Loading';
import noImage from '../../images/no-image.png';
import { ListMovie, Title, ListItem, ListBox } from "./HomeStyled";



 const Home = () => {
    const location = useLocation();
    const [trends, setTrends] = useState([]);
    const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
    fetchMoviesTrending().then(setTrends)  
    setLoading(false)
  }, [])

  return (
    
  <ListBox>
      {loading && <Loading/>}
    <ListMovie>
      {trends.length > 0 &&
        trends.map(({ id, title, poster_path }) => {
          return (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={
                poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}`: noImage} alt={title}  width={260}
                height={350} />
                <Title>{title}</Title>
              </Link>
            </ListItem>
          );
        })}
    </ListMovie>
  </ListBox>
  );
 }

  
 
export default Home 