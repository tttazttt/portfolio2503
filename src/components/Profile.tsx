import azImg from "../img/az.jpeg";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <>
      <div className="h-screen"></div>
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, delay: 0.3 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        className="text-[#e6e6e6] my-20 md:my-30 lg:my-40"
        id="About"
      >
        <div className="text-center flex justify-center">
          <h2 className="pt-12 w-[30%] pr-0 max-w-[180px] ml-10 md:ml-30 md:mt-5 lg:mt-0">
            <img
              src={azImg}
              alt="アイコン画像"
              className="rounded-[50%] mx-auto opacity-80"
            />
          </h2>
          <div className="p-10 pl-5 text-left w-[70%] max-w-[600px] md:pr-0 md:pl-10">
            <h3 className="text-[6vw] lg:text-[45px] relative pb-1">
              Kazuki Ito
            </h3>
            <h3 className="pb-1">36歳</h3>
            <h3 className="text-[2vw] lg:text-[19px] pb-1">
              Kawasaki→Nagoya→Tokyo
            </h3>
            <h3 className="text-[2vw] lg:text-[19px] pb-1">
              青山学院大学経済学部経済学科中退
            </h3>
            <h3 className="text-[3vw] lg:text-[30px] pb-3">
              HTML,CSS,JavaScript,React,Tailwindcss
            </h3>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Profile;
