import React from 'react'
import styles from "./CarCard.module.css"
import Image from 'next/image'
import Booknow from '../BookNow/Booknow'

interface Car {
    id: number;
    carName: string;
    description: string;
    imgUrl: string;
    gear: string;
    door: number;
    people: number;
    price: number;
}

interface CarCardProps {
    car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <div className={styles.popularCarCard} key={car.id}>
            {/* Container for the car card, using a unique key for each car */}

            <div className={styles.imageDiv}>
                <Image src={car.imgUrl} width={357} height={290} alt="" />
            </div>

            <div className={styles.popularCarCardInfo}>
                {/* Information container for the car details */}

                <h3 className={styles.popularCarCardInfoHeading}>
                    {car.carName}
                </h3>

                <p className={styles.popularCarCardInfoPara}>
                    {car.description}
                </p>

                <ul className={styles.popularCarUl}>
                    <li className={styles.popularcarLi}>
                        <Image width={15} height={15} src="/logos/Vector.svg" alt="" />
                        <p>{car.people} People</p>
                    </li>
                    <li className={styles.popularcarLi}>
                        <Image width={15} height={15} src="/logos/Vectorgear.svg" alt="" />
                        <p>{car.gear}</p>
                    </li>
                    <li className={styles.popularcarLi}>
                        <Image width={15} height={15} src="/logos/Vectordoor.svg" alt="" />
                        <p>{car.people} Doors</p>
                    </li>
                    <li className={styles.popularcarLi}>
                        <Image width={15} height={15} src="/logos/Groupac.svg" alt="" />
                        <p>AC</p>
                    </li>
                </ul>

                <div className={styles.popularCarCardInfo2}>
                    <p className={styles.popularCardCost}>
                        AED {car.price}/ Monthly
                    </p>
                    <Booknow />
                    {/* Button component for booking */}
                </div>
            </div>
        </div>

    )
}

export default CarCard