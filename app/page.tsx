import Image from "next/image";
import styles from "./page.module.css";
import SideLeft from "@/app/components/sideLeft";
import SideRight from "./components/sideRight";
import Decoraciones from "./components/decoraciones";
import logo from "@/public/logo.webp";

export default function Page() {
  return (
    <div className={styles.page}>
      <Decoraciones />
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo de la marca" />
        </div>

        <div className={styles.contenedores}>
          <SideLeft />
          <SideRight />
        </div>
      </main>
    </div>
  );
}
