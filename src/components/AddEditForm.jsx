import { useState, useEffect } from "react";

const AddEditForm = ({ onSubmit, editingUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
      setRole(editingUser.role);
    } else {
      setName(""); setEmail(""); setRole("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !role) return alert("All fields required");
    onSubmit({ id: editingUser?.id, name, email, role });
    //Clears form after submit
    setName(""); setEmail(""); setRole("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
      <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default AddEditForm;