export default function Navbar() {
  return (
    <div className="w-full h-[6.5rem] bg-main-red flex items-center justify-between">
      <a className="w-25 h-full flex items-center" href="/">
        <img
          src="/images/logo.png"
          className="w-[4.6rem] h-auto bg-secondary-background rounded-full mx-2 drop-shadow-logo"
          alt="Logo"
        />
        <p className="text-[3.3rem] text-secondary-background tracking-wider">
          BRAKET
        </p>
      </a>

      <ul className="w-25 h-full text-[2rem] text-secondary-background flex items-center justify-between">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
      </ul>

      <ul className="w-25 h-full text-[1.25rem] text-secondary-background tracking-wider flex items-center justify-between">
        <li className="ml-2 mr-1 w-9 h-3/5 rounded-xl bg-log-in-button flex items-center justify-center drop-shadow-nav-buttons">
          <a href="">LOG IN</a>
        </li>
        <li className="ml-1 mr-2 w-9 h-3/5 rounded-xl bg-sign-up-button flex items-center justify-center drop-shadow-nav-buttons">
          <a href="">SIGN UP</a>
        </li>
      </ul>
    </div>
  );
}
