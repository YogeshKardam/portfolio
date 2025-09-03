import React from "react";

function ProjectCard({ ProjectTitle, ProjectDescription, projectPrevUrl, projectCodeUrl, projectImgName }) {
  return (
    <>
      <div className="bg-neutral-800 p-2 md:p-5 mx-5 rounded-lg shadow-md ">
        <div >
          <h2 className="text-2xl font-bold text-white text-center pb-2">
            {ProjectTitle}
          </h2>
        </div>
        <div className="row-span-2 mx-4 flex justify-center">
          <img
            src={`/${projectImgName}`}
            alt=""
            className="object-cover w-full h-32 rounded-md hover:scale-105 transition-transform duration-300 hover:shadow-lg shadow-lg hover:shadow-yellow-300/20"
          />
        </div>
        <div className="row-span-2 px-4">
          <p className="text-gray-300 pt-2 ">{ProjectDescription}</p>
        </div>
        <div className="flex justify-center gap-3 mt-4">
          <a href={projectPrevUrl} target="_blank" className="bg-yellow-500 text-white font-bold text-xl px-2 py-1 rounded-xl hover:scale-104 transition-transform duration-300 hover:shadow-lg shadow-lg hover:shadow-yellow-300/20">Preview </a>
          <a href={projectCodeUrl} target="_blank" className="bg-neutral-700 text-white font-bold text-xl px-2 py-1 rounded-xl hover:scale-104 transition-transform duration-300 hover:shadow-lg shadow-lg hover:shadow-neutral-200/20">Code</a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
