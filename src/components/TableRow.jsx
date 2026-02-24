const TableRow = ({ user, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <button className="edit-btn" onClick={() => onEdit(user)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;