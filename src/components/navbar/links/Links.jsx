'use client'

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const Links =() => {
    return (
        <div className={styles.container}>
          <div className={styles.links}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
             ))}
          </div>
          <Image 
            className={styles.menuButton}
            src='/menu.png'
            alt=''
            width={30}
            height={30}
          />
        </div>
       )
  }

  export default Links;