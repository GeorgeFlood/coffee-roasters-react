import "./App.css";
import { useState } from "react";

function Header() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="hero">
      <div className="hero__info">
        <h1 className="hero__title">
          Great coffee <br />
          made simple.
        </h1>
        <p className="hero__para">
          Start your mornings with the worlds best coffee. try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <a
          className="hero__btn"
          href={"https://georgeflood.github.io/hello-world-portfolio/"}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          {isHovering ? <a>Let's get started</a> : <a>Let's Create Plan</a>}
        </a>
      </div>
    </div>
  );
}

export default Header;
