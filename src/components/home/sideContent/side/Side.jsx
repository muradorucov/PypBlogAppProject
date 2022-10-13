import "./side.css";
import Heading from "../../../common/heading/Heading";
import SocialMedia from "../social/SocialMedia";

const Side = () => {
  const catgeory = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technology",
  ];

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
        {catgeory.map((val, index) => {
          return (
            <div key={index} className="category category1">
              <span>{val}</span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Side;
