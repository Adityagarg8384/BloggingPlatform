import React from "react";
import { SquarePen, BrainCircuit, PencilRuler, Activity } from "lucide-react";
import wordwave from "../assets/bulb-idea.png";
const Home = () => {
  return (
    <div className="relative flex flex-col items-center pt-12 justify-center gap-4 overflow-x-hidden min-h-[100vh]">
      <div className="bg-[#77d7fc]/70 -z-10 absolute top-[-6rem] -z-5 right-[-15rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#4bd670]/70 -z-10 absolute top-[-1rem] -z-5 left-[-15rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <h1 className="text-8xl font-bold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text text-transparent inline-block">
        WordWave
      </h1>
      <div className="flex flex-col justify-center items-center">
        <p className="text-md font-bold text-slate-600">
          Ponder, Pen, and Publish
        </p>
        <p className="text-md font-bold text-slate-600">
          Transform Ideas into Impactful Content with Our Intelligent in-app
          Blog Assistant
        </p>
      </div>
      <div className="text-slate-950 flex flex-col items-center gap-8 mt-8">
        <div className="flex flex-col items-center">
          <div className="text-black shadow-lg cursor-pointer hover:scale-105 duration-200 bg-white p-4 bg-opacity-25 rounded-full">
            <BrainCircuit size={30} />
          </div>
          <p>In-App Blog Assistant: Your Partner in Success</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-black shadow-lg cursor-pointer hover:scale-105 duration-200 bg-white p-4 bg-opacity-25 rounded-full">
            <SquarePen size={30} />
          </div>
          <p>Create, Customize, and Connect</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-black cursor-pointer hover:scale-105 duration-200 bg-white shadow-lg p-4 bg-opacity-25 rounded-full">
            <Activity size={30} />
          </div>
          <p>Estimate Reach, Maximize Impact</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-black cursor-pointer hover:scale-105 duration-200 bg-white shadow-lg p-4 bg-opacity-25 rounded-full">
            <PencilRuler size={30} />
          </div>
          <p>Unleash Your Creativity</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-16">
        <div>
          <img src={wordwave} width={400} className="rounded-full shadow-xl shadow-slate-600" />
        </div>
        <div className="w-[420px] text-slate-600">
          <h2 className="text-xl font-bold text-slate-800">
            Unleash Your Creativity
          </h2>
          <p>
            we believe in unleashing the full potential of your creativity through
            our innovative blogging platform. Whether you're a seasoned writer or
            just starting your journey in the world of blogging, our app offers a
            plethora of features to enhance your experience and reach your
            audience effectively.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-16">
        <div className="w-[420px] text-slate-600">
          <h2 className="text-xl font-bold text-slate-800">
            In-App Blog Assistant: Your Partner in Success            
          </h2>
          <p>
            Ever struggled with explaining complex topics to your readers? 
            Say goodbye to those worries with our in-app blog assistant. 
            Powered by advanced AI technology, our assistant helps you break down intricate subjects into easily understandable language. 
            Not only does it enhance the readability of your content, 
            but it also boosts engagement by ensuring that your message resonates with your audience.
          </p>
        </div>
        <div>
          <img src={wordwave} width={400} className="rounded-full shadow-xl shadow-slate-600"/>
        </div>
      </div>
      <div className="flex items-center justify-between gap-16">
        <div>
          <img src={wordwave} width={400} className="rounded-full shadow-xl shadow-slate-600"/>
        </div>
        <div className="w-[420px] text-slate-600">
          <h2 className="text-xl font-bold text-slate-800">
            Create, Customize, and Connect
          </h2>
          <p>
            Blogging is not just about creating content; it's about building connections. 
            Join our vibrant community of bloggers and enthusiasts to share ideas, 
            collaborate on projects, and support each other's creative endeavors. 
            Whether you're seeking feedback on your latest post or simply looking for inspiration, 
            you'll find a welcoming community ready to cheer you on every step of the way.
          </p>
        </div>
      </div>

      <div className="mt-4 text-4xl flex flex-col gap-4 items-center justify-center mb-8">
          <div className="font-bold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text text-transparent inline-block">
              Discover the endless possibilities of blogging with WordWave. 
          </div>
          <div className="text-sm text-center font-bold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text text-transparent inline-block">
              Sign up today and embark on a journey of creativity, expression, and growth. Whether you're a blogger, a reader, or simply someone who appreciates great content, there's something for everyone at WordWave.
          </div>
      </div>
    </div>
  );
};

export default Home;
