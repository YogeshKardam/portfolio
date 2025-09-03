import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import InfoCarousel from "./components/InfoCarousel";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <InfoCarousel />

      <div
        id="projects"
        className="mt-4 py-1 border-yellow-100 shadow-yellow-200 border-1 shadow-sm mx-auto rounded-full bgs-gray-400 w-50"
      >
        <h2 className="text-3xl font-bold text-gray-300 text-center text-shadow-lg text-shadow-gray-300/20 sm:text-shadow-gray-200/10">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-30 md:mx-20 py-8">
        <ProjectCard
          ProjectTitle={"Currency Converter"}
          ProjectDescription={"Convert currencies in real-time with up-to-date exchange rates. This app allows you to quickly check values between different currencies, making it ideal for travelers, traders, or anyone handling global transactions."}
          projectPrevUrl={"https://currency-converter-by-yogesh.vercel.app"}
          projectCodeUrl={"https://github.com/YogeshKardam/currency-converter"}
          projectImgName={"currencyConverter.png"}
        />
        <ProjectCard
          ProjectTitle={"Finance Tracker"}
          ProjectDescription={"A simple yet powerful tool to manage your income and expenses. Add transactions, track spending patterns, and monitor your savings with an interactive dashboard. Stay in control of your finances effortlessly."}
          projectPrevUrl={"https://finance-tracker-yogesh.vercel.app"}
          projectCodeUrl={"https://github.com/YogeshKardam/finance-tracker"}
          projectImgName={"financeTracker.png"}
        />
        <ProjectCard
          ProjectTitle={"Todo List"}
          ProjectDescription={"Organize your tasks with this clean and easy-to-use Todo List app. Add, manage, and track your daily activities to boost productivity and never miss an important task again"}
          projectPrevUrl={"https://todo-list-by-yogesh.vercel.app"}
          projectCodeUrl={"https://github.com/YogeshKardam/todo-list"}
          projectImgName={"todoList.png"}
        />
      </div>

      <div className='lg:px-50 md:px-15 px-5' >
        <div className="bg-neutral-700 h-0.5 w-full flex justify-center mx-auto mt-10"></div>
    </div>

      <div
        id="skills"
        className="mt-4 py-1 border-yellow-200 shadow-yellow-100 border-1 shadow-sm mx-auto rounded-full bgs-gray-400 w-50"
      >
        <h2 className="text-3xl font-bold text-gray-300 text-center text-shadow-lg text-shadow-gray-300/20 sm:text-shadow-gray-200/10">
          My Skills
        </h2>
      </div>
      <div className="md:mx-[25vw] mx-[15vw] my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <SkillCard
            imgurl={
              "https://hajiriresource.blob.core.windows.net/drive/files/5229e4f802fe97bc54955313e6359ee3.png"
            }
            title={"Html 5"}
          />
          <SkillCard
            imgurl={
              "https://hajiriresource.blob.core.windows.net/drive/files/895c7309017b0dbfef28a885769aef95.png"
            }
            title={"Css"}
          />
          <SkillCard
            imgurl={
              "https://hajiriresource.blob.core.windows.net/drive/files/e7f9cfae8176a55fff2ed86fa59c05dc.png"
            }
            title={"Js"}
          />
          <SkillCard
            imgurl={
              "https://hajiriresource.blob.core.windows.net/drive/files/ade1dbecc75de4c9ffa76839918b7042.png"
            }
            title={"Tailwind Css"}
          />
          <SkillCard
            imgurl={
              "https://hajiriresource.blob.core.windows.net/drive/files/52c0745e6edf2640d6a7bbb19d8f4b2a.png"
            }
            title={"React Js"}
          />
        </div>
      </div>
      <div className='lg:px-50 md:px-15 px-5' >
        <div className="bg-neutral-700 h-0.5 w-full flex justify-center mx-auto mt-10"></div>
    </div>
      <Contact />
      <Footer />


    </>
  );
}

export default App;
