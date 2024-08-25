import React from "react";
import styles from "./RentLease.module.css";
import Image from "next/image";
import { rentLeaseData } from "@/app/libs/siteData";

function RentLease() {
  return (
    <div className={styles.rentSteps}>
      <h2 className={styles.rentStepsHeading}>
        Rent/Lease In three easy steps
      </h2>
      <div className={styles.rentStepsRow}>
        {/* Mapping cards based on rentLeaseData */}
        {rentLeaseData.map((item) => (
          <div className={styles.rentStepCols} key={item.id}>
            <h3 className={styles.rentSteph3}>0{item.id}</h3>
            <div className={styles.rentStepSubdiv}>
              <Image
                className={styles.rentStepSubdivImg}
                src={item.imgUrl}
                alt=""
                width={64}
                height={64}
              />
              <p className={styles.rentDivPara}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RentLease;
