import React from "react"
import styles from "./HowToJoin.module.css"

const HowToJoin: React.FC = () => {
  return (
    <section className={styles.wrapper}>
    <h2 className={styles.title}>Как вступить?</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>
            Вместе мы хотим достичь плато, на котором можно строить дальнейшую
            жизнь: финансовой независимости (см. движение FIRE), крепкого
            здоровья и сети надёжных знакомых.
          </p>
        </div>
        <div className={styles.right}>
          <p>
            Представь себя в небольшой группе людей, которые искренне
            заинтересованы в успехе друг друга. Вы работаете вместе.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowToJoin
