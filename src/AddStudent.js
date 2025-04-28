import { db } from "./firebase"; // your firebase.js path
import { collection, addDoc } from "firebase/firestore";

function AddStudent() {
  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "students"), {
        name: "Vivek",
        age: 21,
        city: "Mumbai"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default AddStudent;
