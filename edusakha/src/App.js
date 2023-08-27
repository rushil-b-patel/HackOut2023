import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import StudentEventPage from "./Components/StudentEventPage";
import LoginForm from "./Components/LoginForm";
import Event from "./Components/Event";
import SignupForm from "./Components/SignupForm";
import Profile from "./Components/Profile";
import MeetingApp from "./Components/MeetingApp";
import EmailForm from "./Components/EmailForm";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/StudentEventPage" element={<StudentEventPage />} />
          <Route path="/SignupForm" element={<SignupForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/EmailForm" element={<EmailForm />} />
          <Route path="/MeetingApp" element={<MeetingApp />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
