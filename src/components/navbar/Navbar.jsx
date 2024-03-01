import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = ({emojiType, setEmojiType}) => {
  return (
    <>  
      <h1 className={styles.appTitle}>Emoji Searching 📔 App</h1>
      <div className={styles.searchBar}>
          <div className={styles.emoji}>🤗</div>
          <input 
            placeholder='  Search Emoji.....'
            value={emojiType}
            onChange={(e)=>setEmojiType(e.target.value)}
          />
          <button className={styles.searchIcon}>
            Search
          </button>
      </div>
    </>
  )
}
