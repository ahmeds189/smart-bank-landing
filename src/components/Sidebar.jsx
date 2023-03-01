import Button from "./Button";
import "./Sidebar.scss";
import useGlobalCxt from "../context";

const Sidebar = () => {
  const { showSidebar } = useGlobalCxt();

  return (
    <aside className={showSidebar ? "show" : null}>
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
        </ul>

        <Button type="cta">Get started</Button>
        <p>no credit card required</p>
      </nav>
    </aside>
  );
};

export default Sidebar;
