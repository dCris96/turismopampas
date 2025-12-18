import Image from "next/image";
import styles from "@/app/components/decoraciones.module.css";
import hoja1 from "@/public/hoja1.png";
import hoja2 from "@/public/hoja2.png";
import hoja3 from "@/public/hoja3.png";
import hoja4 from "@/public/hoja4.png";
import hoja5 from "@/public/hoja5.png";
import hoja6 from "@/public/hoja6.png";

export default function Decoraciones() {
  return (
    <>
      {/* <div className={styles.hoja_blur1}>
        <Image className={styles.blur_1} src={hoja4} alt="Hoja 4 con blur" />
      </div> */}
      <div className={styles.hoja1}>
        <Image src={hoja1} alt="Hoja 1" />
      </div>
      {/* <div className={styles.hoja3}>
        <Image src={hoja3} alt="Hoja 3" />
      </div>
      <div className={styles.hoja2}>
        <Image src={hoja2} alt="Hoja 2" />
      </div>
      <div className={styles.hoja_blur6}>
        <Image src={hoja6} alt="Hoja 6 con blur" />
      </div>
      <div className={styles.hoja5}>
        <Image src={hoja5} alt="Hoja 5" />
      </div>
      <div className={styles.hoja4}>
        <Image src={hoja4} alt="Hoja 4" />
      </div> */}
    </>
  );
}
