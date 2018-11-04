import React, {Component} from 'react';
import Movie from './Movie';

class MovieForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieName: '',
            movieYear: '',
            movieDescription: '',
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
        const key = this.props.k;
        const movie = new Movie(this.state.movieName,this.state.movieYear,this.state.movieDescription);
        if(movie.name !== ''){
            if(key >= 0){
                this.props.action(key,movie);
            }else{
                this.props.action(movie);
            }
        }else{
            alert('Movie title not completed');
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
       <br />
       <label>
         Year:
         <input
          name="movieYear"
          value={this.state.movieYear}
          type="date"
          onChange={this.handleInputChange}/>
       </label>
       <br />
       <label>
         Description:
         <input
          name="movieDescription"
          value={this.state.movieDescription}
          type="text"
          onChange={this.handleInputChange}/>
       </label>
       <br />
       <input type="submit" value="Submit"/>
     </form>
        );
    }
}
export default MovieForm