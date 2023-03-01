import "./Footer.scss";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = ({ data }) => {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          {data.map((item) => {
            const { head, links, id } = item;
            return (
              <ul key={id}>
                <li>
                  <h4>{head}</h4>
                </li>
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
        <div className="social">
          <ul>
            <li>
              <AiOutlineTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <AiFillGithub />
            </li>
          </ul>
          <div></div>
          <ul>
            <li>
              <a href="#">Privacy Plicy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <p>&copy; Copyright 2023, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
