import React,{useEffect} from "react";
import Left_sidebar from "./Left_Sidebar/Left_sidebar";
import Navbar from "./NavBar/Navbar";
import Post from "./Central_Section/Post";
import Central_Section from "./Central_Section/Central_Section";
import Chart from "./Central_Section/Chart";
import Notifications from "./Notify/Notifications";
import { Outlet ,useNavigate} from "react-router-dom";

const ForumPage = () => {
  const navigate = useNavigate();
  const callProfile = async () => {
    try {
      const res = await fetch("/forum", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      navigate("/login")
    }
  };
  useEffect(() => {
    // callProfile();
  }, []);
  return (
    <>
      {/* Forum Page */}
      <Left_sidebar/>
      <Navbar/>
      <Central_Section />
      <Post />
      {/* <Chart /> */}
      <Notifications />
      <Outlet/>
    </>
  );
};

export default ForumPage;
