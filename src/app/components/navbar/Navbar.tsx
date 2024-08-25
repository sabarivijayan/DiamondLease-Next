"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { nav, socialLinksNav } from "@/app/libs/siteData";

function Navbar() {
  const [isSidebarActive, setSidebarActive] = useState<boolean>(false);

  // Toggle sidebar visibility on burger click
  const handleBurgerClick = () => {
    setSidebarActive(true);
  };

  // Close sidebar on close button click
  const handleCloseClick = () => {
    setSidebarActive(false);
  };

  return (
    <div className={styles.header}>
      <header>
        <div className={styles.nav}>
          {/* <!-- navbar social media links --> */}
          <div className={styles.navSocial}>
            <ul className={styles.navSocialList}>
              {/* mapping from socialLinksNav */}
              {socialLinksNav.map((item) => (
                <li className={styles.navSocailLi} key={item.id}>
                  <Link href={item.url}>
                    <Image
                      src={item.imgUrl}
                      alt={item.name}
                      className={styles.facebookNavLogo}
                      height={15}
                      width={15}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.navLayer}>
            {/* Company Logo */}
            <div id="navLogo">
              <Image
                src="logos/Layer_1 (2).svg"
                className={styles.companyLogo}
                width={370}
                height={54}
                alt=""
              />
            </div>

            {/* <!-- navbar navigation links --> */}
            <div className={styles.navList}>
              <ul className={styles.navLinkList}>
                {nav.map((item) => (
                  <li className={styles.navLinkLi} key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
                <li
                  className={`${styles.navLinkLi} ${styles.navLinkButtonLi}`}
                  id="navLinkButtonLi"
                >
                  <button className={styles.notificationButton}>
                    <Image
                      src="\icons\Layer_1bell.svg"
                      alt="notification"
                      height={24}
                      width={24}
                    />
                  </button>
                  {/* <!-- avtar --> */}
                  <button className={styles.avatarButton}>
                    <span className={styles.avatar}>J</span>
                    <span className={styles.name}>John Doe</span>
                  </button>
                </li>
              </ul>

              {/* Hamburger menu */}
              <div className={styles.burger} onClick={handleBurgerClick}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>
          </div>

          <div className={styles.navDropOff}>
            <p className={styles.navPara}>
              Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor
              Grand Sales Counters | All Rates inclusive of VAT. T&Cs apply |
              Follow us on Social Media for New Offers
            </p>
          </div>
        </div>

        {/* <!-- sidebar --> */}
        <div
          className={`${styles.sideBar} ${
            isSidebarActive ? styles.sideBarActive : ""
          }`}
        >
          <div>
            <Image
              src="\icons\Group 1261156498chlose.svg"
              alt="Close Icon For Side Bar"
              className={styles.closeButtonIcon}
              onClick={handleCloseClick}
              width="24"
              height="24"
            />
          </div>

          {/* <!-- Drop down nav menu --> */}
          <div className={styles.dropNavMenu}>
            {nav.map((item, index) => (
              <>
                <Link href={item.link} key={item.id}>
                  {item.title}
                </Link>
                <div className={styles.hDivider} key={index}></div>
              </>
            ))}
            <button className={styles.loginSignUpButton}>Login/Sign Up</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
