import "./teams.css";
import CardOfDevs from "./CardOfDevs";
import tushar from "../Images/tushar.jpg";
import aditya from "../Images/Aditya.jpg";
import omar from "../Images/OMAR.jpeg";
import varun from "../Images/varun.jpg"

export default function Teams() {
  return (
    <div className="containerTeam">
      <h1 className="devs">Developers </h1>
      <CardOfDevs img={tushar} name="Tushar B T" role="Backend Designer"  github="https://github.com/TusharBT15" fb="https://www.facebook.com/" linkedin="https://github.com/TusharBT15" instagram="https://instagram.com/tushar._.bt?utm_medium=copy_link6" />
      <CardOfDevs img={varun} name="Varun Urs M S" role="Full Stack Developer"  github="" fb="" linkedin="" instagram="" />
      <CardOfDevs img={aditya} name="Aditya B N" role="Web Designer"  github="" fb="" linkedin="" instagram="" />
      <CardOfDevs img={omar} name="Omar Abdulla" role="Frontend Developer"  github="" fb="" linkedin="" instagram="" />
    </div>
  );
}

