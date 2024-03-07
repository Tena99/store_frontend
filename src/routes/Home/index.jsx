import styles from "./styles.module.css";
import chocolate_img from "../../assets/images/chocolate.jpg";
import cupcakes_img from "../../assets/images/cupcakes.jpg";
import cakes_img from "../../assets/images/cakes.jpg";

export default function Home() {
  return (
    <section className={styles.home_section}>
      <article className={styles.img_container}>
        <img
          className={styles.additional_img}
          src={cupcakes_img}
          alt="image of cupcakes"
        ></img>
        <img src={chocolate_img} alt="image of chocolate"></img>
        <img
          className={styles.additional_img}
          src={cakes_img}
          alt="image of cakes"
        ></img>
      </article>

      <article>
        <p>
          Welcome to "Sweets for all", where passion meets perfection in the
          world of sweets and chocolate! With an unwavering commitment to
          quality and an undying love for our craft, we take pride in being your
          go-to destination for exquisite confections.
        </p>
        <p>
          At "Sweets for all", we are not just sweet enthusiasts; we are
          dedicated artisans who have mastered the art of creating delectable
          treats that tantalize the taste buds and warm the soul. Our journey is
          a story of passion and precision, where each chocolate is a
          masterpiece crafted with love and expertise.
        </p>
      </article>
    </section>
  );
}
