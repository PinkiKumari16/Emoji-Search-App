import React  from 'react'
import styles from './EmojiCard.module.css'

export const EmojiCard = ({title,symbol}) => {

  return (
    <>
      <div className={styles.emojiCard}>
        <h3>{title}</h3>
        <div className={styles.emojiSymbol}>{symbol}</div>
      </div>
    </>
  )
}
