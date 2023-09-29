import styles from "./banners.module.css";

export default function Tenants() {
  return (
    <div className={styles.banner}>
      <h2 className={styles.bgTitle}>
        Tenants
      </h2>
      <h3>
        There are no admin fees on OpenRent. Ever. There are also no ghost adverts as we take down listings as soon as they are let. We also protect your deposit and rent money.
      </h3>

      <div className={styles.split}>
        <div>
          <ul>
            <li>No admin fees. Ever.</li>
            <li>No dead listings</li>
            <li>Rent and deposit protection</li>
            <li>Safer, faster and cheaper to rent</li>
          </ul>
        </div>


        <div className={styles.ctaContainer}>
          <button className={styles.blueCta}>
            Sign up
          </button>
        </div>
      </div>

    </div>
  )
}