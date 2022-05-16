import {useContext, useState} from "react";
import {MovieContext} from "../Context/ContextList";

export default function Form() {
    // @ts-ignore
    const [movieList,setMovieList] = useContext(MovieContext)
    const [movie,setMovie] = useState<any>()

    const handleChange = ({target}: any) => {
        setMovie((prev: any)=> ({
            ...prev,
            [target.name]: target.value
        }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setMovieList((prev: any)=> ([
            ...prev,
            movie
        ]));
    }

    return(
        <div className="mt-5">
            <h1 className="text-center">Add a movie</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="moviename" className="form-control" id="moviename"
                           placeholder="Name" onChange={handleChange}/>
                </div>
                <br />
                <div className="form-group">
                    <input type="text" name="moviegenre" className="form-control" id="moviegenre" placeholder="Genre" onChange={handleChange}/>
                </div>
                <br />
                <div className="form-group">
                    <input type="text" name="movieprice" className="form-control" id="movieprice" placeholder="Price" onChange={handleChange}/>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Send !</button>
            </form>
        </div>
    )
}