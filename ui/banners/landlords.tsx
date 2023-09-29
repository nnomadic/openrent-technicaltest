import styles from "./banners.module.css";

export default function Landlords() {
  return (
    <div className={styles.banner}>
      <h2 className={styles.bgTitle}>
        Landlords
      </h2>
      <h3>
        We find you tenants and help with referencing, contracts and more.
      </h3>

      <div className={styles.split}>
        <div>
          <ul>
            <li>100% free advertising option</li>
            <li>No hidden fees</li>
            <li>No renewal fees</li>
            <li>No credit card details required to get started</li>
          </ul>
        </div>


        <div className={styles.ctaContainer}>
          <button className={styles.greenCta}>
            Add listing
          </button>
        </div>
      </div>

    </div>
  )
}