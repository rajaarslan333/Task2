import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  Movies = [
    {
      name:"Jab We Met",
      Initial_release: "2009",
      Director: "Arbaz Khan",
      Budget: "95 million USD"
    },
    {
      name:"Pinky Mogy Wali",
      Initial_release: "2014",
      Director: "Gippy Grewal",
      Budget: "60 million USD"
    },
    {
      name:"Action Replay",
      Initial_release: "2006",
      Director: "Anthony",
      Budget: "79 million USD"
    },
    {
      name:"Bad teacher",
      Initial_release: "2004",
      Director: "Elbert Jon",
      Budget: "150 million USD"
    },

  ];
  constructor() {}

  returnMovieList() {
    return this.Movies;
  }
  get getMovie() {
    return this.Movies;
  }
  getAllMovie() {
    return this.Movies;
  }

  deleteMovie(id) {
    this.Movies = this.Movies.filter(e => {
      return e.name !== id;
    });
  }
}
