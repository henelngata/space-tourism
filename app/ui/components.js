"use client";
import styles from "./home.module.css";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { bellefair } from "./fonts/fonts";
import Link from "next/link";

function Logo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="The space tourism logo"
      width={48}
      height={48}
    />
  );
}
function MobileMenu() {
  function openMobileNav() {
    let y = document.getElementById("close");
    let x = document.getElementById("open");
    y.style.display = "block";
    x.style.display = "none";

  }
  return (
    <Image
      src="/images/menu.svg"
      alt="The mobile menu"
      id="open"
      width={24}
      height={21}
      onClick={openMobileNav}
    />
  );
}

function MobileNav() {
  return (
    <header className="flex justify-content align-items">
      <Logo />
      <MobileMenu />
      <MobileMenuNav />
    </header>
  );
}

function TabletNav() {
  return (
    <section className="flex justify-content">
      <Logo />
      <nav className={`${styles.nav}`}>
        <ul className="flex justify-content">
          <TabItems href="#" num="00" text="Home" />
          <TabItems href="/" num="01" text="destination" />
          <TabItems href="#" num="02" text="crew" />
          <TabItems href="#" num="03" text="technology" />
        </ul>
      </nav>
    </section>
  );
}

function TabItems({ href, num, text }) {
  return (
    <Link href={href} className={styles.tab_items}>
      <li className="uppercase">
        <b className={styles.list_num}>{num}</b> {text}
      </li>
    </Link>
  );
}

function DesktopNav(params) {
  return (
    <section className="flex  justify-content align-items">
      <Logo />
      <div className={styles.div}></div>
      <nav className={`${styles.desktop}`}>
        <ul className="flex justify-space">
          <TabItems href="#" num="00" text="Home" />
          <TabItems href="/" num="01" text="Destination" />
          <TabItems href="#" num="00" text="crew" />
          <TabItems href="#" num="00" text="technology" />
        </ul>
      </nav>
    </section>
  );
}

function SpaceText() {
  return (
    <section className={styles.spacetext}>
      <p className={styles.so_you_want}>SO, YOU WANT TO TRAVEL TO</p>
      <p className={`${styles.space} ${bellefair.className}`}>SPACE</p>
      <p className={styles.lets_face_it}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </section>
  );
}

function DisplayButton() {
  return (
    <Link href="#">
      <section className="displayButtonStatesMobile">
        <p>EXPLORE</p>
      </section>
    </Link>
  );
}

function Navigation() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <header>
      {isMobile && <MobileNav />}
      {isTablet && <TabletNav />}
      {isDesktop && <DesktopNav />}
    </header>
  );
}

function ListItems({ href, num, text }) {
  return (
    <Link href={href} className={styles.links}>
      <li className={`${styles.list_items} uppercase`}>
        <b className={styles.list_num}>{num}</b> {text}
      </li>
    </Link>
  );
}

function MobileMenuNav() {
  function closeMobileNav() {
    let x = document.getElementById("close");
    x.style.display = "none";
    let y = document.getElementById("open");
    y.style.display = "block";
    
  }
  return (
    <ul className={styles.mobile_nav} id="close">
      <Image
        className={styles.close}
        src="/images/close.svg"
        alt="close the mobile menu"
        width={20}
        height={20}
        onClick={closeMobileNav}
      />
      <ListItems href="/" num="00" text="Home" />
      <ListItems href="/" num="01" text="destination" />
      <ListItems href="/" num="02" text="crew" />
      <ListItems href="/" num="03" text="technology" />
    </ul>
  );
}
export { Navigation, DisplayButton, SpaceText, MobileMenuNav };
