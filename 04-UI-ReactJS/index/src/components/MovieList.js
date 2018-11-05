import React, {Component} from 'react';

class MovieList extends Component{

  render(){
    const movies = this.props.movies.map((m, i) =>
      <tr key={i}>
      <td>{m.name}</td>
      <td>{m.year}</td>
      <td>{m.description}</td>
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