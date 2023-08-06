import { useEffect,useState,useContext } from "react";
// import Placement from "./Placements"
import Left_sidebar from "./Left_Sidebar/Left_sidebar";
import Navbar from "./NavBar/Navbar";
import UserProf from "./UserProf";
// import student from "./";
import { student } from "./student";
import { useNavigate } from "react-router-dom";
import {User} from "./Login/Login"
import axios from "axios";

const ProfilePage = () => {
  const studPro = useContext(User)
  console.log("Context : ",{studPro});
  const navigate = useNavigate();
  const [studentProfile, setStudentProfile] = useState();
 const res = "";

///////////////////////


useEffect(() => {
  const getStudData = async () => {
    res = await axios.get('/profile')
    console.log(res.data)
    alert(studPro)
  }
  getStudData()
}, [])


///////////////////////

  const callProfile = async () => {
    try {
      const res = await fetch('/profile', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      // alert(data)
      console.log("profile token : ", data);
      setStudentProfile(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      // navigate("/login");
    }
  };
  useEffect(() => {
    // callProfile(); 
  }, []);
  return (
    <>
      <Left_sidebar />
      <Navbar />
      {/* {student.name} */}
      {/* <Placement /> */}

      {student.map((studDetails, index) => {
        return (
          <UserProf
            name={studDetails.name}
            email={studDetails.email}
            usn={studDetails.usn}
            dept={studDetails.department}
            sem={studDetails.semester}
            year={studDetails.year}
            sec={studDetails.section}
            phone={studDetails.phone}
            joiningYear={studDetails.joiningYear}
            passingYear={studDetails.passingYear}
            cgpa={studDetails.cgpa}
            proctor={studDetails.proctor}
            achievements={studDetails.achievements}
            clubs={studDetails.clubs}
            img={studDetails.img}
          />
        );
      })}

      {/* <UserProf name = {"Varun Urs M S"} dept={"CSE"} year={"3rd"} sec={"5D"} mob={"7019456792"}/>
      <UserProf name = {"Tushar B T"} dept={"CSE"} year={"3rd"} sec={"5D"} mob={"6879548621"}/>
      <UserProf name = {"Omar Abdulla Sheriff"} dept={"CSE"} year={"3rd"} sec={"5D"} mob={"9875648654"}/> */}
    </>
  );
};

export default ProfilePage;
