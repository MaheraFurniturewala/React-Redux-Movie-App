import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions'
 
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    //whenever we dispatch an acton(state change) subscribe is called(listener)
    store.subscribe(() => {
      this.forceUpdate();
    })
    // make api call to get movies
    // dispatch an action to add movies to store
      store.dispatch(addMovies(data));



  }
  
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
  
          <div className="list">
            {movies.map((movie,index) => {
            return <MovieCard movie={movie} key={`movies-${index}`} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
