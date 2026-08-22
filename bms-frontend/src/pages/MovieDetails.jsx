import React from "react";
import m10 from "../assets/m10.avif";

import { filters } from "../utils/constants";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  const movie = {
    id: 10,
    title: "28 Years Later",
    genre: ["Horror", "Thriller"],
    rating: 7.9,
    votes: "3.7K",
    img: m10,
    languages: ["English", "Hindi", "Tamil"],
    format: ["2D", "3D", "4D"],
    certification: "A",
    duration: "2h 24m",
    releaseDate: "2026-09-09",
    description:
      "Released on June 20, 2025, 28 Years Later is a post-apocalyptic horror film directed by Danny Boyle and written by Alex Garland. Set nearly three decades after the initial rage virus outbreak, the story follows 12-year-old Spike living on a quarantined tidal island. He journeys to the ruined mainland to find help for his ill mother.",
  };

  return (
    <>
      {/* Movie Details */}
      <div
        className="relative text-white font-sans px-4 py-10"
        style={{
          backgroundImage: `url(${movie.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Poster */}
          <div>
            <img
              src={movie.img}
              alt={movie.title}
              className="rounded-xl w-52 shadow-xl"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-start flex-1">
            <h1 className="text-4xl font-bold mb-4">
              {movie.title}
            </h1>

            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                <span className="text-pink-500 font-bold">
                  ★ {movie.rating}
                </span>

                <span className="text-gray-300">
                  {movie.votes} Votes
                </span>

                <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a]">
                  Rate now
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                {movie.format.join(", ")}
              </span>

              <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                {movie.languages.join(", ")}
              </span>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              {movie.duration} • {movie.genre.join(", ")} •{" "}
              {movie.certification} • {movie.releaseDate}
            </p>

            <div>
              <h2 className="text-xl font-bold mb-2">
                About the movie
              </h2>

              <p className="text-sm text-gray-50 leading-relaxed mb-4">
                {movie.description}
              </p>
            </div>
          </div>

          {/* Share Button */}
          <div className="absolute top-0 right-0 cursor-pointer">
            <button className="cursor-pointer bg-[#3a3a3a] px-4 py-2 rounded text-sm flex items-center gap-2">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Show Timings */}
      <div className="max-w-7xl mx-auto mt-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {filters.map((filter, i) => (
            <button
              className="border border-gray-300 px-5 py-1 rounded-lg cursor-pointer text-sm hover:bg-gray-100"
              key={i}
            >
              {filter}
            </button>
          ))}
        </div>

        <hr className="my-2 border-gray-200" />

        {/* Availability Status */}
        <div className="flex items-center gap-4 rounded-s-sm mb-1 py-2 text-sm px-8 bg-gray-200">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 mr-1 bg-black rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500">
              Available
            </small>
          </span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 mr-1 bg-yellow-400 rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500">
              Filling fast
            </small>
          </span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 mr-1 bg-red-400 rounded-full inline-block"></span>
            <small className="font-semibold text-gray-500">
              Almost full
            </small>
          </span>
        </div>

        {/* Theatres */}
       
      </div>
    </>
  );
};

export default MovieDetails;