import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "./NavBar.module.css"

// module 사용은 파일을 바꿔줘야 하고 클래스 이름들을 기억해줘야 된다. 그리고 클래스이름 자체를 구현하는게 꽤 복잡하다.
export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <nav>
      <Link href="/"> 
        <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
      </Link>
      <Link href="/about">
        <a className={[
          styles.link,
          router.pathname === "/about" ? styles.active : ""
        ].join(" ")}>About</a>
      </Link>
      </nav>
    </>
    )
}