import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MeetTheTeam from "./pages/MeetTheTeam";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="meet-the-team" element={<MeetTheTeam />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
