import React from "react";
import "./email.css";

const Email = () => {
  return (
    <section className="email">
      <div class="card3">
        <div class="card__heading">
          <h2>Subscribe</h2>
          <p>Stay up to date with all the news from our Website</p>
        </div>
        <form class="card__form">
          <input type="text" class="form__input" />
          <br />
          <button type="submit" class="form__submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
