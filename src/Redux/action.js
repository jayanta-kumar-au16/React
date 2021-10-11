import { getmovies } from "./actionType";
import axios from 'axios';


export const fetchmovies = ()=>async(dispatch)=>{
    const response = await axios.get('http://localhost:5000/')
    console.log(response.data.movie)
    dispatch({type:getmovies.GET_MOVIES ,payload:response.data.movie})
};