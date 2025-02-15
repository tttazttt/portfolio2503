import vsPortfolio from "../img/vs-portfolio.png";
import aCatOfToday from "../img/a-cat-of-today.png";
import pastelPicker from "../img/pastel-color-picker.png";
import primitivePachinko from "../img/primitive-pachinko.png";
import quizApp from "../img/quiz-app.png";
import hayauti from "../img/hayauti.png";
import todoApp from "../img/todo-app.png";
import typingApp from "../img/typing-app.png";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <section id="Works" className="mb-20 opacity-80">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.3 }}
        whileInView={{ opacity: 0.9, y: 0 }}
        className="text-center text-[7vw] lg:text-[71px] mb-20"
      >
        Works
      </motion.h2>
      <div className="container mx-auto flex flex-col flex-wrap gap-10 px-20 items-center md:flex-row md:px-0 md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://portfolio-rho-eight-38.vercel.app/">
            <img src={vsPortfolio} alt="サイトプレビュー" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://a-cat-of-today.vercel.app/">
            <img src={aCatOfToday} alt="サイトプレビュー" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://pastel-color-picker.vercel.app/">
            <img src={pastelPicker} alt="サイトプレビュー" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{ opacity: 0.4, scale: 1.2 }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://primitive-pachinko.vercel.app/">
            <img src={primitivePachinko} alt="サイトプレビュー" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://quiz-app-sand-ten.vercel.app/">
            <img src={quizApp} alt="サイトプレビュー" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://hayauti-app.vercel.app/">
            <img src={hayauti} alt="サイトプレビュー" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://vercel.com/azs-projects-b9dbaca7/todo-app">
            <img src={todoApp} alt="サイトプレビュー" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://typing-app-six-eosin.vercel.app/">
            <img src={typingApp} alt="サイトプレビュー" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          whileHover={{
            opacity: 0.4,
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="md:w-[28%] md:pb-20"
        >
          <a href="https://typing-app-six-eosin.vercel.app/">
            <img src={typingApp} alt="サイトプレビュー" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
