import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TVShows from "./components/TVShows";
import Profile from "./components/Profile";
import NetflixNavBar from "./components/NetflixNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      {/* <MyNav /> */}
      <NetflixNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
