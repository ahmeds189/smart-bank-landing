import "./Header.scss";
import logo from "../assets/logo.svg";
import Button from "../components/Button";
import { FiMenu, FiX } from "react-icons/fi";
import useGlobalCxt from "../context";

const Header = () => {
  const { toggleSidebar, showSidebar } = useGlobalCxt();

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="main logo" />
          <h3>
            Smart<span>Bank</span>
          </h3>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Log in</a>
            </li>
            <li>
              <Button type="cta">Get started</Button>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu" onClick={toggleSidebar}>
          {showSidebar ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
