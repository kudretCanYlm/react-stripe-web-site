import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import ErrorPage from "./components/errors/ErrorPage";
import MainPage from "./routes/MainPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
