import Image from "next/image";
import styles from "./infusiones.module.css";
import taza from "@/public/taza.png";
import rama from "@/public/rama.png";
import humo1 from "@/public/humo1.png";
import humo2 from "@/public/humo2.png";

export default function SideLeft() {
  return (
    <div className={styles.left_main}>
      <div className={styles.imagen_taza}>
        <Image className={styles.humos} src={humo1} alt="Imagen de humo" />
        <Image className={styles.humos} src={humo2} alt="Imagen de más humo" />
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
