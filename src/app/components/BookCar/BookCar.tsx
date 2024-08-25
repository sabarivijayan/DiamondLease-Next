"use client";
import { useState } from "react";
import styles from "./BookCar.module.css";
import Link from "next/link";
import Image from "next/image";

function BookCar() {
  const [show, setShow] = useState<boolean>(false);
  const [showDifferent, setShowDifferent] = useState<boolean>(false);

  // handling show state to display menu
  const handleShow = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    // quick book container
    <div className={styles.quickBookContainer}>
      <div className={styles.quickBook}>
        {/* quick book tabs */}
        <div className={styles.tab}>
          <ul className={styles.tabsList}>
            <li className={styles.tabsLi}>
              <a href="">Same as Pick-Up</a>
            </li>
            <li className={styles.tabsLi}>
              <a href="">Different Drop-Off</a>
            </li>
            <li>
              <select
                name="vehicle"
                defaultValue="default"
                className={styles.vehicleSelect}
              >
                <option value="default" disabled hidden>
                  Select Vehicle Type
                </option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
              </select>
            </li>
          </ul>
        </div>

        <div className={styles.bookInput}>
          <select
            name="location"
            className={styles.locationSelect}
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Al Quaz
            </option>
            <option value="sedan">Fujairah</option>
          </select>

          <input
            className={styles.startTime}
            type="datetime-local"
            value="2023-10-30T09:00"
          />
          <input
            className={styles.endTime}
            type="datetime-local"
            value="2023-10-30T09:00"
          />
          <button className={styles.searchButton}>
            <Image
              width={26}
              height={26}
              src="logos/clarity_search-linesearch.svg"
              alt=""
            />
          </button>
          <div className={styles.vDivider}></div>
          <button className={styles.quickBookButton}>Quick Book</button>
        </div>

        <div className={styles.appStore}>
          <p className={styles.downloadPara}>
            Download our App for easy accessibility anytime, anywhere!
          </p>
          <div className={styles.appImages}>
            <Image
              width={110}
              height={32}
              className={styles.storeDownloadImage}
              src="logos/Group 1261156297appStore.svg"
              alt=""
            />
            <Image
              width={110}
              height={32}
              className={styles.storeDownloadImage}
              src="logos/Group 1261156298playstore.svg"
              alt=""
            />
          </div>
        </div>
        <div className={styles.iconsSide}>
          <button id="icon-btn" className={styles.iconBtn}>
            <Image
              src="logos/phone-side.svg"
              width={48}
              height={45}
              alt=""
            />
          </button>
          <button id="icon-btn" className={styles.iconBtn}>
            <Image
              src="logos/24-7.svg"
              width={48}
              height={45}
              alt=""
            />
          </button>
        </div>
        <div className={styles.iconsSideMV}>
          <button className={styles.iconBtnMV}>
            <Image
              src="logos/phone-side.svg"
              width={41.6}
              height={39}
              alt=""
            />
          </button>
          <button className={styles.iconBtnMV}>
            <Image
              src="logos/24-7.svg"
              width={41.6}
              height={39}
              alt=""
            />
          </button>
        </div>
      </div>

      {/* Menu for quick book */}
      <div className={styles.quickBookMobile}>
        <div className={styles.bookDropdownMenu}>
          <button className={styles.BookACar} onClick={handleShow}>
            Book a car
          </button>
          <button className={styles.bookQuick}>Quick book</button>
        </div>

        <div
          className={`${styles.bookTabs} ${show ? styles.bookTabsActive : ""}`}
        >
          <ul className={styles.tabsListMv}>
            <li className={styles.tabsLiMv}>
              <button
                className={styles.sameAsPickUp}
                onClick={(e) => {
                  setShowDifferent(false);
                }}
              >
                Same as Pick-Up
              </button>
            </li>
            <li className={styles.tabsLiMv}>
              <button
                className={styles.differentPickup}
                onClick={(e) => {
                  setShowDifferent(true);
                }}
              >
                Different Drop-Off
              </button>
            </li>
            <li>
              <select
                name="vehicle"
                defaultValue="default"
                className={styles.vehicleSelectmv}
              >
                <option value="default" disabled hidden>
                  Vehicle Type
                </option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
              </select>
            </li>
          </ul>
          <ul className={styles.quickBookmobileInput}>
            <li className={styles.quickBookLi}>
              <select
                name="pickup"
                defaultValue="default"
                className={styles.pickupSelectmv}
              >
                <option value="default" disabled hidden>
                  Pick up location
                </option>
                <option value="sedan">Dubai</option>
              </select>
            </li>
            <li className={styles.quickBookLi}>
              <select
                name="vehicle"
                defaultValue="default"
                className={`${styles.dropOffLocationInactive} ${
                  showDifferent ? styles.dropOffLocationActive : ""
                }`}
              >
                <option value="default" disabled hidden>
                  Drop off location
                </option>
                <option value="sedan">Fujairah</option>
              </select>
            </li>
            <li className={styles.quickBookLi}>
              <input
                className={styles.pickupDate}
                type=""
                placeholder="Pick-Up Date and Time"
              />
            </li>
            <li className={styles.quickBookLi}>
              <input
                className={styles.dropOffDate}
                type=""
                placeholder="Drop off Date and Time"
              />
            </li>

            <li>
              <button className={styles.quickbookSearch}>Search</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookCar;
