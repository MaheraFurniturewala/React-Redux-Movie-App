import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions'
 
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //whenever we dispatch an action(state change) subscribe is called(listener)
    store.subscribe(() => {
      this.forceUpdate(); //render
      
    })
    // make api call to get movies
    // dispatch an action to add movies to store
      store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index !== -1){
      //movie is favourite
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render() {
    console.log(this.props.store.getState());
    const { list,favourites, showFavourites } = this.props.store.getState();

    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
  
          <div className="list">
            {displayMovies.map((movie,index) => {
            return <MovieCard 
            movie={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}  
            isFavourite={this.isMovieFavourite(movie)}/>
            })}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display </div> : null}
        </div>
      </div>
    );
  }
}

export default App;
