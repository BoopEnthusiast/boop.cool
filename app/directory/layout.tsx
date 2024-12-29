import styles from './directory.module.css'

export default function Page({ children }: { children: React.ReactNode }) {
    return <main className={styles.directoryHolder}>
        {children}
    </main>
  }