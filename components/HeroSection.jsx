"use client";
import { TypeAnimation } from "react-type-animation";
import ClipBoard from "./ClipBoard";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex   justify-center min-h-screen py-16 md:py-24"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl">
          <TypeAnimation
            sequence={["Hi, my name is", 2000, "你好，我的名字是", 2000]}
            wrapper="span"
            speed={25}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold">Elias Wu Feng.</h1>
        <h3 className="text-xl md:text-2xl max-w-2xl mx-auto">
          I am an aspiring software engineer studying computer science at
          Binghamton University.
        </h3>

        <ClipBoard />
      </div>
    </section>
  );
};

export default HeroSection;
