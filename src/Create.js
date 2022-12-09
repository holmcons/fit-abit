import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Johan');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const exercise = { title, body, author };

        fetch('http://localhost:8000/exercises/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exercise)
        }).then(() => {
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new Exercise</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Exercise description:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Exersice author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="Johan">Johan</option>
                    <option value="Roland">Roland</option>
                    <option value="Dan">Dan</option>
                </select>
                <button>Add Exercise</button>
            </form>
        </div>
     );
}
 
export default Create;