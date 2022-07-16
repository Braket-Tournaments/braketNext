import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsChevronDown } from "react-icons/bs";

export default function Navbar() {
  const { data: session } = useSession();

  function LoginProfile() {
    const [expanded, setExpanded] = useState(false);

    function expand() {
      setExpanded(true);
    }

    function close() {
      setExpanded(false);
    }

    if (session) {
      return (
        <div
          className="w-[var(--navbar-login-profile-width)] h-full"
          tabIndex={0}
          onFocus={expand}
          onBlur={close}
        >
          <div className="w-[var(--navbar-login-profile-width)] h-full flex items-center justify-between cursor-pointer">
            <img
              src="/images/default_pfp.jpg"
              className="w-auto h-[65%]"
              alt="Profile Picture"
            />
            <p className="w-auto text-[2rem] text-secondary-background align-middle">
              {session.user?.name}
            </p>
            <BsChevronDown className="w-auto h-[30%] mr-[1rem] text-secondary-background" />
          </div>
          {expanded ? (
            <ul className="absolute w-[var(--navbar-login-profile-width)] text-[2rem] text-white bg-main-red">
              <li className="ml-[2.5rem] my-[1.5rem]">
                <motion.a whileHover={{ textShadow: "0px 0px 8px" }} href="">
                  Profile
                </motion.a>
              </li>
              <li className="ml-[2.5rem] my-[1.5rem]">
                <motion.a whileHover={{ textShadow: "0px 0px 8px" }} href="">
                  Tournaments
                </motion.a>
              </li>
              <li className="ml-[2.5rem] my-[1.5rem]">
                <motion.a whileHover={{ textShadow: "0px 0px 8px" }} href="">
                  Settings
                </motion.a>
              </li>
              <li className="h-[0.1rem] bg-white" />
              <li className="ml-[2.5rem] my-[1.5rem]">
                <motion.p
                  className="cursor-pointer"
                  whileHover={{ textShadow: "0px 0px 8px" }}
                  onClick={() => signOut()}
                >
                  Log Out
                </motion.p>
              </li>
            </ul>
          ) : null}
        </div>
      );
    } else {
      return (
        <div className="flex flex-row">
          <button
            className="ml-r2 mr-r1 w-r9 h-full rounded-xl bg-log-in-button justify-center drop-shadow-nav-buttons"
            onClick={() => signIn()}
          >
            LOG IN
          </button>
          <button
            className="ml-r2 mr-r1 w-r9 h-full rounded-xl bg-log-in-button justify-center drop-shadow-nav-buttons"
            onClick={() => signIn()}
          >
            SIGN IN
          </button>
        </div>
      );
    }
  }

  return (
    <nav className="w-full h-[var(--navbar-height)] px-[5rem] bg-main-red flex items-center justify-between">
      <a className="w-r25 h-full flex items-center gap-x-[2rem]" href="/">
        <img
          src="/images/logo.png"
          className="w-auto h-[75%] bg-secondary-background rounded-full drop-shadow-logo"
          alt="Logo"
        />
        <p className="text-[3.3rem] text-secondary-background tracking-wider">
          BRAKET
        </p>
      </a>

      <ul className="w-[55rem] h-full text-[2rem] text-secondary-background flex items-center justify-between">
        <li>
          <a href="">Tournaments</a>
        </li>
        <li>
          <motion.a whileHover={{ textShadow: "0px 0px 8px" }} href="">
            About
          </motion.a>
        </li>
        <li>
          <motion.a whileHover={{ textShadow: "0px 0px 8px" }} href="">
            Contact
          </motion.a>
        </li>
        <li>
          <motion.a whileHover={{ textShadow: "0px 0px 8px" }} href="">
            Support
          </motion.a>
        </li>
      </ul>

      <LoginProfile />
    </nav>
  );
}
