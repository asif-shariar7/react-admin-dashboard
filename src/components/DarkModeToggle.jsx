const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="dark-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3V5M12 19V21M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M3 12H5M19 12H21M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22M12 8a4 4 0 100 8 4 4 0 000-8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;