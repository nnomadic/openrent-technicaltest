import styles from './page.module.css'
import Search from "@/ui/search/search";
import Tenants from "@/ui/banners/tenants";
import Landlords from "@/ui/banners/landlords";
import Carousel from '@/ui/carousel/carousel';
import Image from 'next/image';
import BBC from "@/assets/img/bbc.png";
import Mirror from "@/assets/img/mirror.png";
import Telegraph from "@/assets/img/telegraph.png";
import TheSun from "@/assets/img/the-sun.png";
import Rightmove from "@/assets/img/rightmove.png";
import Zoopla from "@/assets/img/zoopla.png";
import PrimeLocation from "@/assets/img/prime-location.png";
import OtherPartners from "@/assets/img/other-partners.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
      </ul>

      <section className={styles.epic}>
        <Search />
      </section>

      <section className={styles.content}>
        <div className={styles.carousel}>
          <Carousel />
        </div>

        <Tenants />

        <div className={styles.banner}>
          <h2>
            Join 5.9 million Tenants and Landlords who ❤️ OpenRent
          </h2>

          <div className={styles.bannerImages}>
            <Image src={BBC} alt="BBC Image" />
            <Image src={Mirror} alt="Mirror Image" />
            <Image src={Telegraph} alt="Telegraph Image" />
            <Image src={TheSun} alt="TheSun Image" />
          </div>
        </div>

        <Landlords />


        <div className={`${styles.banner} ${styles.secondBanner}`}>
          <h2>
            We advertise on Rightmove, Zoopla, Gumtree, PrimeLocation and more.
          </h2>

          <div className={styles.bannerImages}>
            <Image src={Rightmove} alt="Rightmove Image" />
            <Image src={Zoopla} alt="Zoopla Image" />
            <Image src={PrimeLocation} alt="PrimeLocation Image" />
            <Image src={OtherPartners} alt="OtherPartners Image" />
          </div>
        </div>
      </section>
    </main>

  )
}
