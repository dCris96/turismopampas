import Image from "next/image";
import styles from "./infusiones.module.css";
import taza from "@/public/taza.webp";
import rama from "@/public/rama.webp";

export default function SideLeft() {
  return (
    <div className={styles.left_main}>
      <div className={styles.imagen_taza}>
        <div className={styles.cont_imagen}>
          <Image src={taza} alt="Imagen de taza de té" />
        </div>
        <div className={styles.rama}>
          <Image src={rama} alt="Rama de panisara" />
        </div>
      </div>
    </div>
  );
}
