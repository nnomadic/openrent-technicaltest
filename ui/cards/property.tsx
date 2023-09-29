import Image from "next/image"
import styles from './cards.module.css';

export type PropertyType = {
  href: string
  price: string
  title: string
  desc: string
}

export default function PropertyCard(property: PropertyType) {
  return (
    <div className={styles.property}>

      <a href={property.href} >


        <Image src="https://source.unsplash.com/random/?house" fill className={styles.image} alt="Property Image" />

        <div className={styles.price}>
          <h5>
            {property.price}
          </h5>
        </div>

        <div className={styles.content}>
          <h5>
            {property.title}
          </h5>

          <p>
            {property.desc}
          </p>
        </div>

      </a>
    </div>

  )
}