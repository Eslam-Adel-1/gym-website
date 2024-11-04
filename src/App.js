import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import ExercisePage from "./Components/ExercisePage";
import LoadingScreen from "./Components/LoadingScreen";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TheExercise from "./Components/TheExercise";
import MainPage from "./Components/MainPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="exercise" element={<ExercisePage />} />
            <Route path="exercise/:id" element={<TheExercise />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
