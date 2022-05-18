import { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import useInfiniteItems from "../../hooks/useInfiniteItems";
import MovieCard from "../../shared/MovieCard/MovieCard";
import { ReactQueryDevtools } from "react-query/devtools";

const Trending = () => {
  const trendingMovies = useInfiniteItems(
    `https://api.themoviedb.org/3/trending/movie/day?page=`,
    false,
    true
  );

  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      trendingMovies.fetchNextPage();
    }
  }, [isInView]);

  return (
    <>
      {!trendingMovies.isLoading &&
        trendingMovies.data.pages.map((group, i) => {
          return group.results.map((item) => {
            return <MovieCard {...item} />;
          });
        })}
      <div ref={ref}></div>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};
export default Trending;
