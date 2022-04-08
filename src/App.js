import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalApp } from "./layouts";
import {
  Gallery,
  Home,
  InfoEvent,
  Kontak,
  Pemenang,
  Registrasi,
  Sponsor,
  StravaLeaderboard,
} from "./pages";
import store from "./redux/store";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GlobalApp />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/info-event" element={<GlobalApp />}>
              <Route index element={<InfoEvent />} />
            </Route>
            <Route path="/strava-leaderboard" element={<GlobalApp />}>
              <Route index element={<StravaLeaderboard />} />
            </Route>
            <Route path="/pemenang" element={<GlobalApp />}>
              <Route index element={<Pemenang />} />
            </Route>
            <Route path="/gallery" element={<GlobalApp />}>
              <Route index element={<Gallery />} />
            </Route>
            <Route path="/sponsor" element={<GlobalApp />}>
              <Route index element={<Sponsor />} />
            </Route>
            <Route path="/kontak" element={<GlobalApp />}>
              <Route index element={<Kontak />} />
            </Route>
            <Route path="/registrasi" element={<GlobalApp />}>
              <Route index element={<Registrasi />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
