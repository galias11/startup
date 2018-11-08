import React, {Component} from 'react';
import MovieForm from './MovieForm'
class MovieList extends Component{
  constructor(props){
    super(props);

    this.handleEditing = this.handleEditing.bind(this);
  }
  handleEditing = (e) =>{
    let list = this.props.movies.filter(film => {
      if(film.name !== e.name){
        return film;
      }
    });
    this.props.action(list);
    list.forEach(element => {
      if(element.name === e.name){
        element.year = e.year;
        element.description = e.description;
      }
      if(element.year ===e.year){
        element.name = e.name;
        element.description = e.description;
      }
      if(element.description === e.description){
        element.name = e.name;
        element.year = e.year;
      }
    });
    this.props.action(list);
  }
  render(){
    const movies = this.props.movies.map((m, i) =>
      <tr key={i}>
      <td>{m.name}</td>
      <td>{m.year}</td>
      <td>{m.description}</td>
      <td><MovieForm movie={m} action={this.handleEditing} /></td>
      </tr>);
      return(
          <React.Fragment>
            <table>
              <thead>
                <tr>
                  <th>Movie</th>
                  <th>Year</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
               {movies}
              </tbody>
            </table>
          </React.Fragment>
      );
    }
}
export default MovieList