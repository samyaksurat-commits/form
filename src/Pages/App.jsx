import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "../components/ui/spinner";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "@/components/protectedRoute";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/Slice";

function App() {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const darkMode=useSelector((state)=>state.theme.darkMode);
const dispatch = useDispatch();


  useEffect(() => {
    axios
      .get(import.meta.env.VITE_RICKMORTY)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  function msg() {
    toast.success("Button Successfully Clicked");
    toast.error("Error occured");
    setIsLoading(false);
  }

  if (isloading) {
    return (
      <div className="flex justify-center item-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
    <div className={`${darkMode?"dark":""}`}>
      <div className="grid grid-cols-2 dark:bg-slate-900 dark:text-white">
        <h1 className="text-lg font-semibold text-left text-gray-700 dark:text-slate-300 p-2">
          {darkMode?"Dark Mode":"Light Mode"}
        </h1>
        <button className="text-xl text-right p-3" onClick={()=>dispatch(toggleTheme())}>
          {darkMode?"☀":"🌙"}
        </button>
        <ToastContainer />
      </div>
      <br />
      <Navbar />
      <br />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={true}>
              <Home data={data} />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
    </>
  );
}
export default App;
