import { useState, useEffect } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import AddEditForm from "./components/AddEditForm";
import { usersData } from "./data";

function App() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : usersData;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleAddEdit = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditingUser(null);
    } else {
      const nextId =
        users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

      setUsers([...users, { ...user, id: nextId }]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="card">
        <AddEditForm
          onSubmit={handleAddEdit}
          editingUser={editingUser}
        />
      </div>

      <div className="card">
        <Table
          users={filteredUsers}
          onEdit={setEditingUser}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;