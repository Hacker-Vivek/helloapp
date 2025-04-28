// src/FirestoreForm.js
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const usersCollection = collection(db, "users");

  // Add User
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await addDoc(usersCollection, {
        name: name,
        createdAt: new Date()
      });
      setName('');
      alert('User added!');
    } catch (error) {
      alert(error.message);
    }
  };

  // Delete User
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      alert('User deleted!');
    } catch (error) {
      alert(error.message);
    }
  };

  // Real-time fetching users
  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      setUsers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ margin: "30px" }}>
      <h2>Realtime Firestore CRUD Example 🔥</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Add User</button>
      </form>

      <h3>Users List (Auto-refresh! 🚀):</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} &nbsp;
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
