import "./.css/main.css";
import danche from "./images/image-danche.png";
import granEspresso from "./images/image-gran-espresso.png";
import piccollo from "./images/image-piccollo.png";
import planalto from "./images/image-planalto.png";

function SectionOne() {
  const section1 = document.querySelectorAll(".section");

  return (
    <section className="section">
      <h2 className="section--title">our collection</h2>

      <div className="coffeeBox-container">
        <div className="coffeebox">
          <img
            className="coffeebox--img"
            src={granEspresso}
            alt="Gran espresso"
          />
          <h4 className="coffeebox--title">Gran Espresso</h4>
          <p className="coffeebox--para">
            Light flavourful blend with cocoa and black pepper for an intense
            experience.
          </p>
        </div>

        <div className="coffeebox">
          <img className="coffeebox--img" src={planalto} alt="Planalto" />
          <h4 className="coffeebox--title">Planalto</h4>
          <p className="coffeebox--para">
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts.
          </p>
        </div>

        <div className="coffeebox">
          <img className="coffeebox--img" src={piccollo} alt="piccollo" />
          <h4 className="coffeebox--title">Piccollo</h4>
          <p className="coffeebox--para">
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry.
          </p>
        </div>

        <div class="coffeebox">
          <img className="coffeebox--img" src={danche} alt="danche" />
          <h4 className="coffeebox--title">Danche</h4>
          <p className="coffeebox--para">
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
