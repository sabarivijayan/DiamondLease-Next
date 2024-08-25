"use client";
import React, { useEffect, useState } from "react";
import styles from "./Slideshow.module.css";
import { slides } from "@/app/libs/siteData";
import Image from "next/image";

function SlideShow() {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  // useEffect to change Slide
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    // SlideShow Slides
    <div className={styles.slideshowContainer}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.mySlides} ${
            index === slideIndex ? styles.show : ""
          }`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        ></div>
      ))}

      {/* SlideShow Dot*/}
      <div className={styles.dotContainer}>
        {slides.map((_, index) => (
          <span
            key={`dot-${index}`}
            className={`${styles.dot} ${
              index === slideIndex ? styles.active : ""
            }`}
          ></span>
        ))}
      </div>

      <div className={styles.summerPromotionDiv}>
        <div id="giftVoucher">
          Recieve guaranteed
          <button className={styles.giftVoucherButton}>Gift Voucher</button>
        </div>
        <div>on a monthly hire or lease</div>
      </div>
    </div>
  );
}

export default SlideShow;
