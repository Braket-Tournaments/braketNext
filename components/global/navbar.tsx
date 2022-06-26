import styles from "../../styles/Home.module.css";

export default function Navbar() {
  return (
    <div>
      <a className="logo-and-name-container" href="/">
        <div className="logo-container">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <p className="website-name">BRACKET</p>
      </a>

      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Support</li>
      </ul>

      <ul>
        <li>Log In</li>
        <li>Sign Up</li>
      </ul>
    </div>
  );
}
