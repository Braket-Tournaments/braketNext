import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { userInfo } from "os";
import default_pfp from "../../public/images/default_pfp.jpg";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  function LoginProfile() {
    if (session) {
      return (
        <div className="flex flex-col">
          <div className="flex flex-row">
            <img
              className=""
              src="https://lh3.googleusercontent.com/a-/AFdZucpNibb1o6Ux-heSeS_audW7HRnxqWA1lfwdCbdW5g=s96-c"
              alt="Profile Picture"
            />
            <p>{session.user?.name}</p>
          </div>
          <ul className="">
            <li>
              <a className="" href="">
                Profile
              </a>
            </li>
            <li>
              <a className="" href="">
                Tournaments
              </a>
            </li>
            <li>
              <a className="" href="">
                Settings
              </a>
            </li>
            <li>
              <a className="" href="" onClick={() => signOut()}>
                Log Out
              </a>
            </li>
          </ul>
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

      <ul className="w-[40rem] h-full text-[1.25rem] text-secondary-background tracking-wider flex items-center justify-between">
        <li className="h-3/5">
          <LoginProfile />
        </li>
        <li className="h-3/5">
          {/* <motion.a
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 5px 4px",
            }}
            className="w-r9 h-full rounded-xl bg-sign-up-button justify-center drop-shadow-nav-buttons"
            href=""
          >
            Your Profile
          </motion.a> */}
        </li>
      </ul>
    </nav>
  );
}
