"use client";
import { useState, ChangeEvent } from "react";
import styles from "./BookCar.module.css";
import Image from "next/image";

function BookCar() {
  const [show, setShow] = useState<boolean>(false);
  const [showDifferent, setShowDifferent] = useState<boolean>(false);


  const [formattedDate, setFormattedDate] = useState<string>(''); // Type for useState is string

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value; // Get the value in yyyy-MM-ddTHH:mm format

    if (value) {
      const datePart = value.split('T')[0]; // Split date and time parts
      const [year, month, day] = datePart.split('-'); // Split into year, month, day
      const formatted = `${day}/${month}/${year}`; // Format to dd/mm/yyyy
      setFormattedDate(formatted); // Set the formatted date to state
    } else {
      setFormattedDate(''); // Reset if no value
    }
  };
  //show state to display the side menu

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
              <select name="vehicle" defaultValue="default" className={styles.vehicleSelect}>
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
          <select name="location" className={styles.locationSelect} defaultValue="default">
            <option value="default" disabled hidden>
              Al Quaz
            </option>
            <option value="sedan">Fujairah</option>
          </select>

          <input className={styles.startTime} type="datetime-local" value="2023-10-30T09:00"/>
          <input className={styles.endTime} type="datetime-local" value="2023-10-30T09:00"/>
          <button className={styles.searchButton}>
            <Image width={26} height={26} src="logos/clarity_search-linesearch.svg" alt=""/>
          </button>
          <div className={styles.vDivider}></div>
          <button className={styles.quickBookButton}>Quick Book</button>
        </div>

        <div className={styles.appStore}>
          <p className={styles.downloadPara}>
            Download our App for easy accessibility anytime, anywhere!
          </p>
          <div className={styles.appImages}>
            <Image width={110} height={32} className={styles.storeDownloadImage} src="logos/Group 1261156297appStore.svg" alt=""/>
            <Image width={110} height={32} className={styles.storeDownloadImage} src="logos/Group 1261156298playstore.svg" alt=""/>
          </div>
        </div>
        <div className={styles.iconsSide}>
          <button id="icon-btn" className={styles.iconBtn}>
            <Image src="logos/phone-side.svg" width={48} height={45} alt=""/>
          </button>
          <button id="icon-btn" className={styles.iconBtn}>
            <Image src="logos/24-7.svg" width={48} height={45} alt=""/>
          </button>
        </div>
        <div className={styles.iconsSideMV}>
          <button className={styles.iconBtnMV}>
            <Image src="logos/phone-side.svg" width={41.6} height={39} alt=""/>
          </button>
          <button className={styles.iconBtnMV}>
            <Image src="logos/24-7.svg" width={41.6} height={39} alt=""/>
          </button>
        </div>
      </div>

      {/* Dropdown menu for quick book in the MV*/}
      <div className={styles.quickBookMobile}>
        <div className={styles.bookDropdownMenu}>
          <button className={styles.BookACar} onClick={handleShow}>
            Book a car
          </button>
          <button className={styles.bookQuick}>Quick book</button>
        </div>

        <div className={`${styles.bookTabs} ${show ? styles.bookTabsActive : ""}`}>
          <ul className={styles.tabsListMv}>
            <li className={styles.tabsLiMv}>
              <button className={styles.sameAsPickUp}
                onClick={(e) => {
                  setShowDifferent(false);
                }}
              >
                Same as Pick-Up
              </button>
            </li>
            <li className={styles.tabsLiMv}>
              <button className={styles.differentPickup}
                onClick={(e) => {
                  setShowDifferent(true);
                }}
              >
                Different Drop-Off
              </button>
            </li>
            <li>
              <select name="vehicle" defaultValue="default" className={styles.vehicleSelectmv}>
                <option value="default" disabled hidden> Vehicle Type </option>
                <option value="sedan">Sedan</option>
                <option value="hatchback">Hatchback</option>
                <option value="suv">SUV</option>
              </select>
            </li>
          </ul>
          <ul className={styles.quickBookmobileInput}>
            <li className={styles.quickBookLi}>
              <select name="pickup" defaultValue="default" className={styles.pickupSelectmv}>
                <option value="default" disabled hidden> Pick up location </option>
                <option value="sedan">Dubai</option>
              </select>
            </li>
            <li className={styles.quickBookLi}>
              <select name="vehicle" defaultValue="default" className={`${styles.dropOffLocationInactive} ${showDifferent ? styles.dropOffLocationActive : ""}`}>
                <option value="default" disabled hidden>Drop off location</option>
                <option value="sedan">Fujairah</option>
              </select>
            </li>
            <li className={styles.quickBookLi}>
              <input className={styles.pickupDate} type="datetime-local" onChange={handleDateChange}/>
            </li>
            <li className={styles.quickBookLi}>
              <input className={styles.dropOffDate} type="datetime-local" onChange={handleDateChange} placeholder="Drop off Date and Time"/>
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
