import Link from 'next/link'
import styles from '../styles/home.module.css'

export default async function Home() {
  return <div className={styles.home}>
            <div>
              <div><h1>Hi, my name is Ivan!</h1></div>
              <div>
                <Link href="/blog">My Blog</Link>
              </div>
              <div>
                <Link href="/contact">Contact me</Link>
              </div>
              <div>contact</div>
            </div>  
        </div>
}