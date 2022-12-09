import { Link } from 'react-router-dom';

const ExerciseList = ({exercises}) => {
    
    return (
        <div className="exercise-list">
            {exercises.map(exercise => (
                <div className="exercise-preview" key={exercise.id}>
                    <Link to={`/exercises/${exercise.id}`}>
                        <h2>{ exercise.title }</h2>
                        <p>Written by { exercise.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ExerciseList;