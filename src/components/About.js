import stack from "../media/icons/stack.png";
import no2 from "../media/images/no2.jpeg";
export default function About() {
  function scroll(event) {
    let id = event.target.name;
    const section = document.getElementById(id);
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }

  return (
    <>
      <div className="section about" id="about">
        <div className="h2-bg">ABOUT ME</div>
        <h2>Know Me More</h2>
        <div className="studies">
          Graduated from <span className="accent">Makers courses</span> with{" "}
          <span className="accent">Front-End Development</span> as my focus.
        </div>
        <div className="info">
          <div className="techStack">
            <span>Tech Stack</span>
            <img src={stack} alt="Tech Stack" />
          </div>
          <div className="myInfo">
            <img
              className="nav-img about-img"
              src={no2}
              alt="Portrait of an awesome person!"
            />
            <div>
              <span className="darken">Name:</span> Emirlan Abdykadyrov
            </div>
            <div>
              <span className="darken">Email:</span> emirlan9191@gmail.com
            </div>
            <div>
              <span className="darken">Age: </span>18
            </div>
            <div>
              <span className="darken">Language:</span> Russian
            </div>
            <button
              onClick={scroll}
              className="button buttonFill"
              name="contact"
            >
              Get CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
