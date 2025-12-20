"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./mapa.module.css";

// Importación dinámica
const Map = dynamic(() => import("./Mapa"), {
  ssr: false,
  loading: () => <p>Cargando mapa...</p>,
});

export default function Home() {
  return (
    <main className={styles.contenedor}>
      <div className={styles.encabezado}>
        <h1>Mi Proyecto con Leaflet</h1>
        <Link href="./">Atrás</Link>
      </div>
      <div id="map-container" className={styles.map_container}>
        <Map />
      </div>
    </main>
  );
}
