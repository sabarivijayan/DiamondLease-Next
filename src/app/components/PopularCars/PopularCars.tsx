import React from "react";
import styles from "./Popularcar.module.css";
import CarCard from "../CarSlider/CarCard";
import { popCars } from "@/app/libs/siteData";

function PopularCars() {
  return (
    <div>
      <section className={styles.popularcars}>
        <h2 className={styles.popularcarsH2}>Most popular cars</h2>
        <div className={styles.popularCardRow}>
          {/* Mapping the cars Card */}
          {popCars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default PopularCars;
