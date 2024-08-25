import Image from "next/image";
import React from "react";
import styles from "./Locations.module.css";
import { locations } from "@/app/libs/siteData";

function Locations() {
  return (
    <div className={styles.location}>
      <h2 className={styles.locationHeadings}>Locations</h2>
      <ul className={styles.locationUl}>
        {locations.map((item) => (
          <li className={styles.locationLi} key={item}>
            <Image
              src="logos\Layer_1locationPin2.svg"
              width={23}
              height={29}
              alt=""
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;
