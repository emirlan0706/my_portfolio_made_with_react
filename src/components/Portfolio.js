import findfreebies from "../../src/media/images/projects/findfreebies.png";
import spacex from "../../src/media/images/projects/spacex.png";
import wiki from "../../src/media/images/projects/wiki.png";

export default function Portfolio() {
  return (
    <>
      <div className="section portfolio" id="portfolio">
        <div className="h2-bg">PORTFOLIO</div>
        <h2>My Work</h2>
        <div className="projects">
          <div className="project">
            <div className="project-img">
              <img src={findfreebies} alt="Project Screenshot"></img>
            </div>

            <div className="project-info">
              <div className="project-name">Find Freebies</div>
              <div className="project-desc">
                Website that allows users to find freebies in their area. Goal
                is to help people save money and reduce waste.
              </div>
              <div className="project-links">
                <a className="red" href="https://find-freebies.netlify.app">
                  <button className="button buttonFill">Preview</button>
                </a>
                <a
                  className="red"
                  href="https://github.com/dr-Luka/find-freebies"
                >
                  <button className="button buttonFill">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project reverse">
            <div className="project-img">
              <img src={spacex} alt="Project Screenshot"></img>
            </div>
            <div className="project-info">
              <div className="project-name">Space-X</div>
              <div className="project-desc">
                Tribute site to Space-X. Built in order to use amazing API for
                space images. Have Fun!
              </div>
              <div className="project-links">
                <a className="red" href="https://spacex-preview.netlify.app">
                  <button className="button buttonFill">Preview</button>
                </a>
                <a className="red" href="https://github.com/dr-Luka/spaceX">
                  <button className="button buttonFill">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={wiki} alt="Project Screenshot"></img>
            </div>

            <div className="project-info">
              <div className="project-name">Code Wiki</div>
              <div className="project-desc">
                On this website logged in users are able to create and edit
                posts about coding. This was done with custom Heroku API which
                in unfortunately down at the moment but I implore you to check
                out the code.
              </div>
              <div className="project-links">
                <a className="red" href="https://code-wiki.netlify.app">
                  <button className="button buttonFill">Preview</button>
                </a>
                <a className="red" href="https://github.com/dr-Luka/wiki">
                  <button className="button buttonFill">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
