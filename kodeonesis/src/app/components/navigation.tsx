import React from "react";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <ul className="flex justify-around p-4">
        <li><a href="#apropos">À Propos</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#nzc">NZC</a></li>
      </ul>
    </nav>
  );
}
