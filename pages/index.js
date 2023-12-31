// next image
import Image from "next/image";
// component
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";
// framer motion
import { motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title  */}
          <h1 className="h1">
            {" "}
            Trasforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality </span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* imaeg  */}
      <div> imaeg </div>
    </div>
  );
};

export default Home;
