/** @format */

type MoviePosterProps = {
  poster: string;
};

export default function MoviePoster({ poster }: MoviePosterProps) {
  return <img src={poster} alt="Movie poster" width={300} />;
}
