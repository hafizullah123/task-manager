// Importing React and the useState hook to manage component state
import React, { useState } from "react";

// The main functional component of the application
function App() {
  // useState hook to manage the list of users (initially two users)
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);

  // useState hook to manage the current input value for a new user
  const [newUser, setNewUser] = useState("");

  // Function to handle adding a new user
  const addUser = () => {
    // Prevent adding a user if the input is empty or only spaces
    if (newUser.trim() === "") return;

    // Create a new user object with a unique id and name from the input
    const userToAdd = {
      id: users.length + 1, // simple way to assign a unique id
      name: newUser,
    };

    // Add the new user to the list using spread operator
    setUsers([...users, userToAdd]);

    // Clear the input field after adding
    setNewUser("");
  };

  // JSX to define what appears on the web page
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Title of the page */}
      <h1>User List</h1>

      {/* Looping through the users array and displaying each user in a list */}
      <ul>
        {users.map((user) => (
          // Each user should have a unique key prop for performance
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Input field for entering a new user's name */}
      <input
        type="text"
        placeholder="Enter new user name"
        value={newUser} // Controlled input tied to newUser state
        onChange={(e) => setNewUser(e.target.value)} // Update state on input change
        style={{ marginRight: "10px" }}
      />

      {/* Button to trigger the addUser function */}
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

// Exporting the App component so it can be used in index.js
export default App;
