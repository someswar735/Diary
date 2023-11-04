import { useState } from "react";
import { useHistory } from "react-router-dom";

// ... imports

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Friends'); // Set the default value here
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Contact Name:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Contact Number:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Category:</label>
        <select
          value={author} // Set the value to the author state
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Friends">Friends</option>
          <option value="Relatives">Relatives</option>
        </select>
        <button>Save</button>
      </form>
    </div>
  );
}

export default Create;
