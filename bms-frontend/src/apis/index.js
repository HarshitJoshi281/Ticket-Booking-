export const getMovieById = async (id) => {
  return {
    data: {
      movie: {
        _id: id,
        title: "28 Years Later",
        posterUrl: "/src/assets/m10.avif",
        rating: 7.9,
        votes: "3.7K",
        format: ["2D", "3D", "4D"],
        languages: ["English", "Hindi", "Tamil"],
        duration: "2h 24m",
        genre: ["Horror", "Thriller"],
        certification: "A",
        releaseDate: "09 Sep 2026",
        description:
          "Released on June 20, 2025, 28 Years Later is a post-apocalyptic horror film directed by Danny Boyle and written by Alex Garland. Set nearly three decades after the initial rage virus outbreak, the story follows 12-year-old Spike living on a quarantined tidal island."
      }
    }
  };
};

export const getShowsByMovieAndLocation = async (
  movieId,
  location,
  date
) => {
  return {
    data: []
  };
};