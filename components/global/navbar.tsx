export default function Navbar() {
  return (
    <nav className="w-full h-[6.5rem] bg-main-red flex items-center justify-between">
      <a className="w-r25 h-full flex items-center" href="/">
        <img
          src="/images/logo.png"
          className="w-[4.6rem] h-auto bg-secondary-background rounded-full mx-r2 drop-shadow-logo"
          alt="Logo"
        />
        <p className="text-[3.3rem] text-secondary-background tracking-wider">
          BRAKET
        </p>
      </a>

      <ul className="w-r25 h-full text-[2rem] text-secondary-background flex items-center justify-between">
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

      <ul className="w-r25 h-full text-[1.25rem] text-secondary-background tracking-wider flex items-center justify-between">
        <li className="h-3/5">
          <a
            className="ml-r2 mr-r1 w-r9 h-full rounded-xl bg-log-in-button flex items-center justify-center drop-shadow-nav-buttons"
            href=""
          >
            LOG IN
          </a>
        </li>
        <li className="h-3/5">
          <a
            className="ml-r1 mr-r2 w-r9 h-full rounded-xl bg-sign-up-button flex items-center justify-center drop-shadow-nav-buttons"
            href=""
          >
            SIGN UP
          </a>
        </li>
      </ul>
    </nav>
  );
}
