import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/"); // Redirect if not logged in
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <>
          <p>Welcome, <strong>{user.email}</strong>!</p>
          <p>UID: {user.uid}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
