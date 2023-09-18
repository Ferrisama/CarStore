"use client";

import Link from "next/link";
import Image from "next/image";
import Login from "./Login";

const NavBar = () => (
  <div className="nav-background">
    <header className="w-full  absolute z-10  ">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-16 py-14 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/hero-bg.png"
            alt="logo"
            width={80}
            height={30}
            className="object-contain"
          />
          <b>CoursePlaza</b>
        </Link>
        <div className="space-x-36 pl-12" style={{ fontSize: "20px" }}>
          <Link
            href="/courses"
            className="text-primary-gold font-semibold hover:underline"
          >
            Courses
          </Link>
          <Link
            href="/live-class"
            className="text-primary-gold font-semibold hover:underline"
          >
            Live!
          </Link>
          <Link
            href="/assignment"
            className="text-primary-gold font-semibold hover:underline"
          >
            Assignments
          </Link>
          <Link
            href="/purchase"
            className="text-primary-gold font-semibold hover:underline"
          >
            Purchase
          </Link>
        </div>
        <Login />
      </nav>
    </header>
  </div>
);

export default NavBar;
