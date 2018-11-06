import React, {Component} from 'react';
import Movie from './Movie';

class MovieForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieName: this.props.movie.name,
            movieYear: this.props.movie.year,
            movieDescription: this.props.movie.description,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleInputChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };


    handleSubmit = (e) =>{
        e.preventDefault();
        const movie = new Movie(this.state.movieName,this.state.movieYear,this.state.movieDescription);
        if(this.state.movieName !== movie.name || this.state.movieYear !== movie.year || this.state.movieDescription !== movie.description){
            movie.name = this.state.movieName;
            movie.year = this.state.movieYear;
            movie.description = this.state.movieDescription;
            return movie;
        }else{
            if(movie.name !== ''){
                this.props.action(movie);
            }else{
                alert('Movie title not completed');
            }
        }
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input
          name="movieName"
          value={this.state.movieName}
          type="text"
          onChange={this.handleInputChange}/>
       </label>
       <label>
         Year:
         <input
          name="movieYear"
          value={this.state.movieYear}
          type="date"
          onChange={this.handleInputChange}/>
       </label>
       <label>
         Description:
         <input
          name="movieDescription"
          value={this.state.movieDescription}
          type="text"
          onChange={this.handleInputChange}/>
       </label>
       
       <input type="submit" name={this.props.action} value="Submit"/>
     
     </form>
        );
    }
}
export default MovieForm