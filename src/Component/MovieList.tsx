import {MovieContext} from "../Context/ContextList";
import {JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext} from "react";

export default function MovieList() {
    // @ts-ignore
    const [movieList, setMovieList] = useContext(MovieContext)

    return (
        <>
            {movieList.map((movie: { moviegenre: string; moviename: string; movieprice: string | number; }) => (
                <div className="card" key={movie.moviename} style={{width: "85%",marginBottom: "1em"}}>
                    <div className="card-header">
                        <h5 className="card-text">Titre : {movie.moviename}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text mb-2">Genre : {movie.moviegenre}</p>
                        <small className="card-subtitle text-muted">Film à : {movie.movieprice}€</small>
                    </div>
                </div>
            ))}
        </>
    )
}