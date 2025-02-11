import { motion } from "framer-motion";
import x from "../img/x.svg";
import instagram from "../img/instagram.svg";
import github from "../img/github.svg";

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 0.3,
          stiffness: 100,
        }}
        className="h-20 fixed z-100 w-[100%] opacity-70"
      >
        <div className="container mx-auto flex h-[100%] text-[#ececec]">
          <ul className="flex gap-5 items-center ml-5 text-[11px] sm:text-[13px]">
            <motion.li
              whileHover={{
                y: -5,
                scale: 1.3,
                transition: { duration: 0.5 },
                opacity: 0.5,
              }}
            >
              <a href="#Home">Home</a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
                scale: 1.3,
                transition: { duration: 0.5 },
                opacity: 0.5,
              }}
            >
              <a href="#About">About</a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
                scale: 1.3,
                transition: { duration: 0.5 },
                opacity: 0.5,
              }}
            >
              <a href="#Works">Works</a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
                scale: 1.3,
                transition: { duration: 0.5 },
                opacity: 0.5,
              }}
            >
              <a href="#Contact">Contact</a>
            </motion.li>
          </ul>
          <ul className="flex gap-5 sm:gap-8 ml-auto items-center mr-5">
            <motion.li
              whileHover={{
                y: -5,
                scale: 1.3,
                transition: { duration: 0.5 },
                opacity: 0.5,
              }}
            >
              <a href="https://x.com/acordingfox">
                <img src={x} alt="xロゴ" className="w-4 sm:w-6" />
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
                scale: 1.3,
                transition: { duration: 0.5 },
                opacity: 0.5,
              }}
            >
              <a href="#">
                <img
                  src={instagram}
                  alt="instagramロゴ"
                  className="w-4 sm:w-6"
                />
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
                scale: 1.3,
                transition: { duration: 0.5 },
                opacity: 0.5,
              }}
            >
              <a href="https://github.com/tttazttt">
                <img src={github} alt="githubロゴ" className="w-4 sm:w-6" />
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
