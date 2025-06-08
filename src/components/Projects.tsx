"use client"
import { fadeInUp } from "../../utility/animation";
import Post from "../../utility/Post";
import { motion } from "@/lib/motion";

const Projects = () => {
  return (
    <section>
      <div className="py-20 container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Futured Projects
        </motion.h2>
        <Post />
      </div>
    </section>
  );
};

export default Projects;
