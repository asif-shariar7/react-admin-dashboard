import TableRow from "./TableRow";

const Table = ({ users, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <TableRow key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;