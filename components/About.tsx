"use client";
import React from "react";
import Card from "./ui/Card";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CanvasRevealEffect } from "./ui/Canvas-reveal-effect";
import { AnimatedTooltip } from "./ui/Animated-tooltip";
import { social, techStack } from "@/data/data";
import { motion } from "framer-motion";
import { fadeAnimation, fadeRight, techStackAnimation } from "@/lib/animation";

function About() {
  return (
    <section
      id="about"
      className="w-full py-10 lg:py-20 flex flex-col lg:flex-row justify-between"
    >
      <div className="flex flex-col w-full lg:w-2/3 px-8 lg:order-1">
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <TextGenerateEffect
            words="MUHAMMAD KHAIRATUL"
            className="text-center lg:text-start text-[24px] md:text-3xl lg:text-5xl font-bold"
          />
        </motion.div>
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <p className="text-gray-300 text-center lg:text-start text-sm md:text-md">
            Front end development | Data Scientist | Final-year Information Systems
            Student at President University
          </p>
        </motion.div>
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <p className="text-gray-400 mt-4 text-xs lg:text-sm text-justify">
           Hello! I'm Khairatul a highly motivated and detail-oriented final-year Information Systems student at President University. I have a strong passion for front-end development and data science, with over a year of experience in full-stack development and UI/UX design. I'm known for my adaptability, initiative, and ability to perform well under pressure. I also have creative experience in film and videography projects, blending technical skills with visual storytelling.
            <br />
            <br /> I specialize in modern web technologies and enjoy building impactful digital solutions with clean, user-focused design. Outside of coding, I stay up-to-date with the latest design trends, contribute to open-source projects, and share knowledge with the tech community. I'm always eager to collaborate, grow, and create meaningful digital experiences that make a difference.
          </p>
        </motion.div>
        <motion.div>
          <div className="mt-4 font-medium">
            <p className="text-gray-200">Tech stack :</p>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-start w-full lg:w-4/5 gap-x-4">
              {techStack.map((tech, index) => {
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={techStackAnimation}
                    className="px-4 py-2 rounded-xl mt-2 flex flex-row items-center justify-center gap-2 border border-slate-700 cursor-pointer hover:border-blue-600 transition-all duration-200"
                    style={{
                      background: "rgb(4,7,29)",
                      backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                  >
                    <img className="w-5" src={tech.image} />
                    <p className="text-xs md:text-sm">{tech.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/3 lg:order-2">
        <Card
          title="Lets connect!"
          icon={
            <img src="/Khai.JPG" className="object-cover overflow-hidden" />
          }
          socialIcons={social}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

export default About;