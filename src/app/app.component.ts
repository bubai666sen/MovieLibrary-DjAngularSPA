import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'Movie Library';
  movies = [{title:'No movies'}];
  selectedMovie = {id: -1, title: '',desc:'',year:''};
  constructor(private api:ApiService) {
    this.getMovies();
  }
  getMovies = () => {
    this.api.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.log(error);
      }
    )
  }
  movieClicked = (movie) => {
   this.api.getMovie(movie.id).subscribe(
     data => {
       this.selectedMovie= data;
     },
     error => {
       console.log(error);
     }
   ); 
  }
  updateMovie = () => {
    this.api.updateMovie(this.selectedMovie).subscribe(
      data => {
        this.selectedMovie= data;
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
    //this.getMovies();
  }
  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        this.movies.push(data);
      },
      error => {
        console.log(error);
      }
    );
    //this.getMovies();
  }
  deleteMovie = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies();
        this.reset();
      },
      error => {
        console.log(error);
      }
    )
  }
  reset = () => {
    this.selectedMovie = {id: -1, title: '',desc:'',year:''};
  }
}
