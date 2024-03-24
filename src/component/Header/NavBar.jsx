import "./navbar.css"
import * as  IoIcons  from "react-icons/io";
const NavBar = () => {
  return (
    <>
      <header>
        <section className="nav-content">
          <div className="menu-bar">
            <IoIcons.IoIosMenu className="bars" />
          </div>
          <div className="title">
            <span>Entourage</span>
          </div>
          <div className="login-register">
            <a href="">
              <p>Login / Register</p>
            </a>
          </div>
        </section>
      </header>
    </>
  );
};

export default NavBar;
