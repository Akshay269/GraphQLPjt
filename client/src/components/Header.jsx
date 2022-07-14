import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand">
          <img src={logo} alt="logo" className="mr-2" />
          <div>ProjectMgmt</div>
        </a>
      </div>
    </nav>
  );
}
