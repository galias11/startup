import React, {Component} from 'react';
import MovieForm from './MovieForm';

class MovieContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: [],
        }
        this.addMovie = this.addMovie.bind(this);
    }
    addMovie(movie){
        const movies = this.state.movies;
        this.setState({
            movies: [...movies,movie]
        });
    }
    render() {
        return (
         <div>
           <section className="Content">
             <header>
               <h2>Add your favourite movies</h2>
             </header>
            <MovieForm movie={null} action={this.addMovie}/>
           </section>
        
         </div>
        );
      }
    }


export default MovieContainer