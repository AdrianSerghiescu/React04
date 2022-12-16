import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/LoginMethods/Login";
import Signup from "./components/LoginMethods/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Characters from "./components/RickAndMortyApp/pages/Characters";
import ReduxEpisodes from "./components/RickAndMortyApp/pages/ReduxEpisodes";
import ReduxCharacters from "./components/RickAndMortyApp/pages/ReduxCharacters";
import SingleEpisode from "./components/RickAndMortyApp/pages/SingleEpisode";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/characters" element={<Characters />} />
          <Route path="/redux_episodes" element={<ReduxEpisodes />} />
          <Route
            path="/redux_episodes/:episodeId"
            element={<SingleEpisode />}
          />
          <Route path="/redux_characters" element={<ReduxCharacters />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
