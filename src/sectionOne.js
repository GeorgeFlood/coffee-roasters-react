import "./App.css";

function SectionOne() {
  const section1 = document.querySelectorAll(".section");

  return (
    <section className="section">
      <h2 className="section--title">our collection</h2>

      <div className="coffeeBox-container">
        <div className="coffeeBox">
          <img
            className="coffeebox--img"
            src={"./public/image-gran-espresso.pgn"}
            alt="Gran espresso"
          />
          <h4 className="coffeeBox--title">Gran Espresso</h4>
          <p className="coffeeBox--para">
            Light flavourful blend with cocoa and black pepper for an intense
            experience.
          </p>
        </div>

        <div className="coffeeBox">
          <img
            className="coffeebox--img"
            src={"./public/image-planalto.pgn"}
            alt="Planalto"
          />
          <h4 className="coffeeBox--title">Planalto</h4>
          <p className="coffeeBox--para">
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts.
          </p>
        </div>

        <div className="coffeeBox">
          <img
            className="coffeebox--img"
            src={"./public/image-piccollo.pgn"}
            alt="piccollo"
          />
          <h4 className="coffeeBox--title">Piccollo</h4>
          <p className="coffeeBox--para">
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry.
          </p>
        </div>

        <div class="coffeeBox">
          <img
            className="coffeebox--img"
            src={"./public/image-danche.pgn"}
            alt="danche"
          />
          <h4 className="coffeeBox--title">Danche</h4>
          <p className="coffeeBox--para">
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
