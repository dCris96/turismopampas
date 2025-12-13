import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/public/logo.png";
import taza from "@/public/taza.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.cont_logo}>
          <Image src={logo} alt="logo de la marca" />
        </div>
        <div className={styles.cont_main}>
          <div className={styles.imagen}>
            <Image src={taza} alt="imagen de taza" />
          </div>
          <div className={styles.textos}>
            <h1>Infusiones Andinas</h1>
            <p>
              Descubre el sabor puro y natural de nuestra infusión andina de
              Panisara, una mezcla reconfortante elaborada con ingredientes de
              la región.
            </p>
          </div>
        </div>
        <div>mapa</div>
      </main>
    </div>
  );
}
