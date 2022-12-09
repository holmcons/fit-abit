import useFetch from "./useFetch";
import ExerciseList from "./ExercisList";

const Home = () => {
    const { isPending, error, data: exercises } = useFetch('http://localhost:8000/exercises')
    
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { exercises && <ExerciseList exercises={exercises} /> }
        </div>
     );
}
 
export default Home;