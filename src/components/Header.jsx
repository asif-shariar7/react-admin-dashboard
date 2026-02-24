import DarkModeToggle from "./DarkModeToggle";

const Header = ({ searchTerm, setSearchTerm, darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <h1 className="header-title">Admin Dashboard</h1>
      <div className="header-actions">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
};

export default Header;