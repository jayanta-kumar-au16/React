import {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetchmovies } from '../../Redux/action';

const Allmovies = ()=>{
    const movie = useSelector((state)=>state.allmovies.moviesData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchmovies());
    }, [dispatch])

    return (
        <>
            {movie.map((item)=>(
                <div className="box" key={Math.random()}>
                    <h3>{item.movie_name}</h3>
                    <h3>{item.rating}</h3>
                    <h4>{item.date}</h4>
                </div>
            ))}
        </>
    )
}
export default Allmovies;
