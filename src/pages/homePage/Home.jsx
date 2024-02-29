import React, { useState } from 'react'
import styles from './Home.module.css'
import { EmojiCard } from '../../components/emojiCards/EmojiCard'
import { Navbar } from '../../components/navbar/Navbar'
import data from './emojiList.json'

export const Home = () => {
  const [emojisData,setEmojisData] = useState(data)
  const [emojiType, setEmojiType] = useState("")
  return (
    <>
      <Navbar emojiType={emojiType} setEmojiType={setEmojiType}/>
      <div className={styles.text}>
          <h2>Most Popular..</h2>
      </div>
      <div className={styles.parent}>
        {emojisData.map((emoji, ind)=>{
          if(emojiType !== "") {
            if(emoji['title'].toLowerCase().includes(emojiType.toLowerCase())){
              return(<EmojiCard key={emoji.title} {...emoji}/>)
            } 
          }
          else{
            if(ind<=19){
              return(<EmojiCard key={emoji.title} {...emoji}/>)
            }
          }
        })}
      </div>
    </>
  )
}
