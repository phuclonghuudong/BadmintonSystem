import { ToastContainer } from "react-toastify";
import Router from "./v1/routers/Router";

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="top-right text-[12px]"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
