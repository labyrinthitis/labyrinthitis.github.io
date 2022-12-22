import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'techn꙳cal log'
export const siteTitle = 'technical log'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="an informal, technical log"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            {}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.footer}>
          <p><Link href="/">Back to index</Link></p>
        </div>
      )}
    </div>
  )
}
