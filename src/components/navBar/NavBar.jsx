import { NavLink } from 'react-router-dom';
import { Header, ButtonHome,ButtonMovies } from './NavBarStyled';

const NavBar = () => {
  return (
    <>
      <Header>
        <nav>
          <NavLink to="/" end>
             <ButtonHome>Home</ButtonHome>            
          </NavLink>
          <NavLink to="/movies">
             <ButtonMovies>Movies</ButtonMovies>
          </NavLink>
        </nav>
      </Header>
    </>
  );
};

export default NavBar;