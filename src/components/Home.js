export default function Home() {
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
      <div className="section home" id="home">
        <div className="welcome">Welcome</div>
        <h1>I'm a Front-End Developer</h1>
        <div className="darken">based in Bishkek, Kyrgyzstyan</div>
        <div>
          <button onClick={scroll} className="button hireMe" name="contact">
            {/* Hire Me */}
          </button>
        </div>
      </div>
    </>
  );
}
