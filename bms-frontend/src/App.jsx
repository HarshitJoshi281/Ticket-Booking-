import {Route,Routes, useMatch} from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import Profile from "./pages/Profile"
import SeatLayout from "./pages/SeatLayout"
function App() {
   const isSeatLayoutPage = useMatch(
    "/movies/:movieId/:movieName/:state/theater/:theaterId/show/:showId/seat-layout"
  );

  return (
    <>
      <div className="flex flex-col min-h-screen">
          {!isSeatLayoutPage && <Header />}
        <main className="flex-grow">
         
        <Routes> 
           <Route path="/" element={<Home/>}/>
            <Route path="/profile/:id" element={<h1>Profile  Page</h1>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:state/:mivieName/:id/ticket" element={<MovieDetails/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path = "/movies/:movieId/:moviesName/:state/theater/:theaterId/show/:showId/seat-layout" element={<SeatLayout/>}/>
        </Routes>
        

        
        {!isSeatLayoutPage && <Footer />}
        </main>
      </div>
    </>
  )
}

export default App 
