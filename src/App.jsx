import React, { Suspense } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

// import Signin from "../pages/Signin";
// import Signup from "../pages/Signup";
// import MySpace from "../pages/MySpace";
// import UserChat from "../pages/UserChat";
// import Calendar from "../pages/Calendar";
// import Trash from "../pages/Trash";

// Lazy-loaded components
const Signup = React.lazy(() => import("../pages/Signup"));
const Signin = React.lazy(() => import("../pages/Signin"));
const MySpace = React.lazy(() => import("../pages/MySpace"));
const Test = React.lazy(() => import("../pages/Test"));
const TempSignout = React.lazy(() => import("../pages/TempSignout"));
const UserChat = React.lazy(() => import("../pages/UserChat"));
const Calendar = React.lazy(() => import("../pages/Calendar"));
const Trash = React.lazy(() => import("../pages/Trash"));

function App() {
  const { authUser } = useAuthContext();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? <Navigate to="/myspace" /> : <Navigate to="/signin" />
          }
        />
        <Route
          path="/signin"
          element={authUser ? <Navigate to="/myspace" /> : <Signin />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/myspace" /> : <Signup />}
        />
        <Route
          path="/myspace"
          element={authUser ? <MySpace /> : <Navigate to="/signin" />}
        />
        <Route
          path="/chat"
          element={authUser ? <UserChat /> : <Navigate to="/signin" />}
        />

        <Route
          path="/calendar"
          element={authUser ? <Calendar /> : <Navigate to="/signin" />}
        />
        <Route
          path="/trash"
          element={authUser ? <Trash /> : <Navigate to="/signin" />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="/signout" element={<TempSignout />} />
      </Routes>
      <Toaster />
    </Suspense>
  );
}

export default App;
