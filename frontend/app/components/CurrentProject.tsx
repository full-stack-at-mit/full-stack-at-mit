import React from "react";

interface CurrentProjectProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  team: string;
}

const CurrentProject: React.FC<CurrentProjectProps> = ({
  title,
  description,
  link,
  imageUrl,
  team,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-lg hover:shadow-custom transition duration-300">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4 w-full md:w-1/3">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:ml-4 w-full">
        <h4 className="text-2xl font-semibold text-gray-700 mb-2">{title}</h4>
        {/* <h6 className="text-md text-gray-600 mb-4">by {team}</h6> */}
        <p className="text-md text-gray-800 mb-4">{description}</p>
      </div>
    </div>
  );
};

export default CurrentProject;