import { PATHS } from "../config";

import Movies from '../components/movies/movie';
import Notfound from '../components/NotFound';

const routes = [
    {exact:true , path:PATHS.HOME , component:Movies},
    {path:'*', exact:true , component:Notfound}
]

export default routes;