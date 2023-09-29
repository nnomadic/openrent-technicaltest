import Image from 'next/image'
import Logo from "@/assets/svg/logo.svg";
import Login from '@/assets/svg/login.svg';
import styles from './nav.module.css'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Image src={Logo} alt={'OpenRent Logo'} className={styles.logo} />


      <div className={styles.links}>
        <a className={styles.link}>Tenants</a>
        <a className={styles.link}>Landlords</a>
        <a className={styles.link}>Our mission</a>
        <a className={styles.link}>Pricing & Services</a>
        <a className={styles.link}>
          <Image src={Login} alt={'Login Icon'} />
        </a>
      </div>

    </div>
  )
}