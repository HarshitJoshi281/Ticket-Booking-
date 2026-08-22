import { useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const TheaterTimings = ({ movieId }) => {
  const navigate = useNavigate();
  const { auth, toggleModal } = useAuth();

  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);

  const next7days = Array.from({ length: 7 }, (_, i) =>
    today.add(i, "day")
  );

  // Dummy theatre data - frontend only
  const showData = [
    {
      theater: {
        theaterDetails: {
          _id: "theater1",
          name: "PVR Cinemas",
          logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/PVR_Cinemas_logo.svg",
        },
        shows: [
          {
            _id: "show1",
            startTime: "10:30 AM",
            audioType: "2D",
          },
          {
            _id: "show2",
            startTime: "01:30 PM",
            audioType: "2D",
          },
          {
            _id: "show3",
            startTime: "06:00 PM",
            audioType: "3D",
          },
          {
            _id: "show4",
            startTime: "09:30 PM",
            audioType: "3D",
          },
        ],
      },
      movie: {
        title: "28 Years Later",
      },
    },

    {
      theater: {
        theaterDetails: {
          _id: "theater2",
          name: "INOX",
          logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/INOX_Leisure_logo.svg",
        },
        shows: [
          {
            _id: "show5",
            startTime: "11:00 AM",
            audioType: "2D",
          },
          {
            _id: "show6",
            startTime: "02:15 PM",
            audioType: "2D",
          },
          {
            _id: "show7",
            startTime: "05:45 PM",
            audioType: "3D",
          },
          {
            _id: "show8",
            startTime: "10:00 PM",
            audioType: "3D",
          },
        ],
      },
      movie: {
        title: "28 Years Later",
      },
    },

    {
      theater: {
        theaterDetails: {
          _id: "theater3",
          name: "Cinepolis",
          logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Cinepolis_logo.svg",
        },
        shows: [
          {
            _id: "show9",
            startTime: "12:00 PM",
            audioType: "2D",
          },
          {
            _id: "show10",
            startTime: "03:30 PM",
            audioType: "2D",
          },
          {
            _id: "show11",
            startTime: "07:00 PM",
            audioType: "3D",
          },
        ],
      },
      movie: {
        title: "28 Years Later",
      },
    },
  ];

  return (
    <>
      <hr className="my-2 border-gray-200" />

      {/* Dates */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto py-4 px-2">
        {next7days.map((date, i) => {
          const isSelected = selectedDate.isSame(date, "day");

          return (
            <button
              key={i}
              onClick={() => setSelectedDate(date)}
              className={`flex cursor-pointer flex-col border border-gray-200 items-center px-3 py-2 rounded-lg min-w-[50px] ${
                isSelected
                  ? "bg-black text-white font-semibold"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              <span className="text-sm font-black">
                {date.format("D")}
              </span>

              <span className="text-xs">
                {date.format("ddd")}
              </span>

              <span className="text-[10px]">
                {date.format("MMM").toUpperCase()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Theatres */}
      <div className="space-y-8 px-4 mb-10">
        {showData.map((curr, i) => (
          <div key={i}>
            {/* Theatre information */}
            <div className="flex items-start gap-3 mb-2">
              <img
                src={curr.theater.theaterDetails.logo}
                alt="logo"
                className="w-8 h-8 object-contain"
              />

              <div>
                <p className="font-semibold">
                  {curr.theater.theaterDetails.name}
                </p>

                <p className="text-sm text-gray-500">
                  Allows Cancellation
                </p>
              </div>
            </div>

            {/* Show timings */}
            <div className="flex flex-wrap gap-3 ml-11">
              {curr.theater.shows.map((slot, i) => {
                const theaterId =
                  curr.theater.theaterDetails._id;

                const movieName = curr.movie.title;

                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (!auth) {
                        toggleModal();
                        return;
                      }

                      navigate(
                        `/movies/${movieId}/${movieName}/theater/${theaterId}/show/${slot._id}/seat-layout`
                      );
                    }}
                    className="border cursor-pointer hover:bg-gray-100 border-gray-300 rounded-[16px] px-12 py-2 text-sm flex flex-col items-center justify-center"
                  >
                    <span className="leading-tight font-semibold">
                      {slot.startTime}
                    </span>

                    <span className="text-[10px] text-gray-500 font-black">
                      {slot.audioType.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TheaterTimings;