import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ExerciseDetails = () => {
    const { id } = useParams();
    const { data: exercise, error, isPending } = useFetch('http://localhost:8000/exercises/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/Exercises/' + exercise.id, {
        method: 'DELETE'
        }).then(() => {
        navigate('/');
        }) 
    }

    return ( 
        <div className="exercise-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { exercise && (
                <article>
                    <h2>{ exercise.title }</h2>
                    <p>Written by { exercise.author }</p>
                    <div>{ exercise.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ExerciseDetails;