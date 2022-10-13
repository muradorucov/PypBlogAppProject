import "./side.css";
import Heading from "../../../common/heading/Heading";
import SocialMedia from "../social/SocialMedia";
import { Link } from "react-router-dom";

const Side = () => {
  const navLinks = [ 
    {
    id:1,
    name:"Home",
    route:""
    },
    {
      id:2,
      name:"News",
      route:"News"
    },
    {
      id:3,
      name:"Sport",
      route:"Sport"
    },
    {
      id:4,
      name:"Reel",
      route:"Reel"
    },
    {
      id:5,
      name:"Worklife",
      route:"Worklife"
    },
    {
      id:6,
      name:"Travel",
      route:"Travel"
    },
    {
      id:7,
      name:"Future",
      route:"Future"
    },
    {
      id:8,
      name:"Culture",
      route:"Culture"
    },
    {
      id:9,
      name:"Tech",
      route:"Tech"
    },
]

  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />
      <Heading title="Subscribe" />
      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>SUBMIT</button>
        </form>
      </section>
      <section className="catgorys">
        <Heading title="Catgeorys" />
        {navLinks.map((item,index) => {
          return (
            <Link key={item.id} to={`/${item.route}`}>
            <div  className="category category1">
              <span>
              {item.name}
              </span>
            </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Side;
