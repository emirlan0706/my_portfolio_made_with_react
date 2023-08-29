import dantist from "../../src/media/images/projects/dantist.png";
import Nike from "../../src/media/images/projects/Nike.png";
import Ww from "../../src/media/images/projects/Ww.png";
import Pretty from "../../src/media/images/projects/Pretty.png";
import Stuff from "../../src/media/images/projects/Stuff.png";

export default function Portfolio() {
  return (
    <>
      <div className="section portfolio" id="portfolio">
        <div className="h2-bg">PORTFOLIO</div>
        <h2>My Work</h2>
        <div className="projects">
          <div className="project reverse">
            <div className="project-img">
              <img src={dantist} alt="Project Screenshot"></img>
            </div>
            <div className="project-info">
              <div className="project-name">DentRW</div>
              <div className="project-desc">
                my first project when I became a freelancer this project is a
                dental clinic and the clinic itself is located in Kigali in
                Rwanda and this site also contains all the data about the clinic
              </div>
              <div className="project-links">
                <a className="red" href="https://dentrw-alx.vercel.app/">
                  <button className="button buttonFill">Preview</button>
                </a>
                <a
                  className="red"
                  href="https://github.com/emirlan0706/Dentist"
                >
                  <button className="button buttonFill">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={Nike} alt="Project Screenshot"></img>
            </div>

            <div className="project-info">
              <div className="project-name">Nike style</div>
              <div className="project-desc">
                Welcome to our NIKE brand website Here you will find an exciting
                journey into the world of innovation, style and sport. Our site
                is a unique space where brand fans can fully immerse themselves
                in the NIKE atmosphere.
              </div>
              <div className="project-links">
                <a
                  className="red"
                  href="https://singular-jelly-eb1646.netlify.app/"
                >
                  <button className="button buttonFill">Preview</button>
                </a>
                <a
                  className="red"
                  href="https://github.com/emirlan0706/nike-store-main"
                >
                  <button className="button buttonFill">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project reverse">
            <div className="project-img">
              <img src={Stuff} alt="Project Screenshot"></img>
            </div>
            <div className="project-info">
              <div className="project-name">Stuff-shop</div>
              <div className="project-desc">
                Welcome to the STUFF-shop - your destination for everything
                related to innovative gadgets, stylish accessories and unique
                products Our shelves are stocked with the latest and exciting
                tech and trendy items that will enhance your style and make your
                life more interesting.
              </div>
              <div className="project-links">
                <a
                  className="red"
                  href="https://golden-gecko-6bc7ad.netlify.app/"
                >
                  <button className="button buttonFill">Preview</button>
                </a>
                <a
                  className="red"
                  href="https://github.com/emirlan0706/desigin-API"
                >
                  <button className="button buttonFill">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <img src={Pretty} alt="Project Screenshot"></img>
            </div>

            <div className="project-info">
              <div className="project-name">Pretty-shop</div>
              <div className="project-desc">
                Welcome to the PRETTY-shop web platform, your ideal place to
                enrich your home with beautiful and functional furniture. Our
                pages are intertwined with elegant designs and practical
                solutions make your home even cozier and more inviting.
              </div>
              <div className="project-links">
                <a
                  className="red"
                  href="https://645508de97943f10e7d9f4f2--comforting-croissant-f1de7f.netlify.app/"
                >
                  <button className="button buttonFill">Preview</button>
                </a>
                <a
                  className="red"
                  href="https://github.com/emirlan0706/pretty-shop-react-app-v2"
                >
                  <button className="button buttonFill">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project reverse">
            <div className="project-img">
              <img src={Ww} alt="Project Screenshot"></img>
            </div>
            <div className="project-info">
              <div className="project-name">Wefootwear</div>
              <div className="project-desc">
                Welcome to WEFootwear, a platform where style meets comfort and
                innovation in the world of branded apparel and footwear. We
                offer awide range of high quality brands that combine fashion
                trends and functionality.
              </div>
              <div className="project-links">
                <a className="red" href="https://wefootwear.vercel.app/">
                  <button className="button buttonFill">Preview</button>
                </a>
                <a
                  className="red"
                  href="https://github.com/emirlan0706/store-app-colab"
                >
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
