import styles from "./search.module.css";
import Image from "next/image";
import Location from "@/assets/svg/location.svg";

import SearchIcon from "@/assets/svg/search.svg";

export default function Search() {
  return (
    <div className={styles.search}>
      <h1>
        Renting the way it should be
      </h1>

      <h2>
        Find, advertise and manage rental property
      </h2>


      <div className={styles.searchBar}>


        <Image src={Location} alt="Location Pin Icon" />
        <input type="text" id="search" name="search" required minLength={3} placeholder="Postcode, Station or City" className={styles.input} />

        <Image src={SearchIcon} alt="Search Icon" />

      </div>

    </div>
  )
}