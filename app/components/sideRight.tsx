import Image from "next/image";
import Link from "next/link";
import styles from "./infusiones.module.css";
import iconMap from "@/public/icon-map.png";

export default function SideRight() {
  return (
    <div className={styles.right_main}>
      <div>
        <h1 className={styles.text_main}>Infusiones Pampasinas</h1>
        <p className={styles.text_sec}>
          Descubre el sabor puro y natural de nuestra infusión andina de
          Panisara, una mezcla reconfortante elaborada con ingredientes de la
          región.
        </p>
      </div>

      <div className={styles.text_bottom}>
        <h2>¡Conoce Pampas a través de sus infusiones!</h2>
        <p>
          Visita nuestro mapa turistico y descubre lugares impresionantes que
          deberias conocer.
        </p>
        <Link href="#" className={styles.boton}>
          <Image src={iconMap} alt="Icono de mapa" />
          Mapa turístico
        </Link>
      </div>
    </div>
  );
}
