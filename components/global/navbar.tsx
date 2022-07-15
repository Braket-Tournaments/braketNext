import { motion } from "framer-motion";
import UserAuth from "./login-btn"

export default function Navbar() {
  return (
    <nav className="w-full h-[var(--navbar-height)] bg-main-red flex items-center justify-between">
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

      <ul className="w-[55rem] h-full text-[2rem] text-secondary-background flex items-center justify-between">
        <li>
        <motion.a whileHover={{ textShadow: "0px 0px 8px"}} href="">Tournaments</motion.a>
        </li>
        <li>
          <motion.a whileHover={{ textShadow: "0px 0px 8px"}} href="">About</motion.a>
        </li>
        <li>
          <motion.a whileHover={{ textShadow: "0px 0px 8px"}} href="">Contact</motion.a>
        </li>
        <li>
          <motion.a whileHover={{ textShadow: "0px 0px 8px"}} href="">Support</motion.a>
        </li>
      </ul>

      <ul className="w-r25 h-full text-[1.25rem] text-secondary-background tracking-wider flex items-center justify-between">
        <li className="h-3/5">
          <motion.a
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0px 0px 5px 4px"
            }}
            className="ml-r2 mr-r1 w-r9 h-full rounded-xl bg-log-in-button flex items-center justify-center drop-shadow-nav-buttons"
            href=""
          >
           <UserAuth
            className="ml-r2 mr-r1 w-r9 h-full rounded-xl bg-log-in-button flex items-center justify-center drop-shadow-nav-buttons"
          />
          </motion.a>
        </li>
        <li className="h-3/5">
          <motion.a
            whileHover={{ 
              scale: 1.2,
              boxShadow: "0px 0px 5px 4px"
            }}
            className="ml-r1 mr-r2 w-r9 h-full rounded-xl bg-sign-up-button flex items-center justify-center drop-shadow-nav-buttons"
            href="./profile"
          >
            Your Profile
          </motion.a>
        </li>
      </ul>
    </nav>
  );
}
