import React from "react";
import styles from "./Faq.module.css";
import Accordion from "../Accordion/Accordion";
import { faqs } from "@/app/libs/siteData";

function Faq() {
  return (
    <div className={styles.faq}>
      <h2 className={styles.faqHeading}>Frequently asked questions</h2>
      <Accordion faqs={faqs} />
    </div>
  );
}

export default Faq;
