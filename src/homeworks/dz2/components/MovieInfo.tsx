/** @format */

import { Component } from "react";

import type { MovieType } from "@/homeworks/dz2/types/MovieType";
import MoviePoster from "@/homeworks/dz2/ui/MoviePoster";

type MovieProps = {
  movie: MovieType;
};

export default class MovieInfo extends Component<MovieProps> {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <h2>Улюблений фільм</h2>

        <p>
          <strong>Назва:</strong> {movie.title}
        </p>
        <p>
          <strong>Режисер:</strong> {movie.director}
        </p>
        <p>
          <strong>Рік випуску:</strong> {movie.year}
        </p>
        <p>
          <strong>Кіностудія:</strong> {movie.studio}
        </p>
        <p>
          <strong>Жанр:</strong> {movie.genre}
        </p>
        <p>{movie.description}</p>
        <MoviePoster poster={movie.poster} />
      </div>
    );
  }
}
