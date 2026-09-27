function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#2e7d32",
        color: "white",
      }}
    >
      <h2>Paradise Nursery</h2>

      <div>
        <a href="#" style={{ color: "white", marginRight: "20px" }}>
          Home
        </a>

        <a href="#" style={{ color: "white", marginRight: "20px" }}>
          Plants
        </a>

        <a href="#" style={{ color: "white" }}>
          Cart (0)
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
