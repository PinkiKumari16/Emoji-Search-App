import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { EmojiCard } from '../../components/emojiCards/EmojiCard'
import { Navbar } from '../../components/navbar/Navbar'
import data from './emojiList.json'

export const Home = () => {
  const [emojisData,setEmojisData] = useState([])
  const [emojiType, setEmojiType] = useState("")
  const [popularText, setPopularText] = useState(true)

  const emojiFetchData = () =>{
    let filterData;
    if(emojiType !== ""){
      filterData = data.filter((emoji) =>(emoji['title'].toLowerCase().includes(emojiType.toLowerCase())));
    }else{
      filterData = data.slice(0,20);
    }
    setEmojisData(filterData);
    setPopularText(filterData.length < 1 ? false : true)
    
  }
  
  useEffect(() => {
    emojiFetchData();
  }, [emojiType])
  
  return (
    <>
<<<<<<< HEAD
=======
>>>>>>> 54e77153a (add one line)
      <Navbar emojiType={emojiType} setEmojiType={setEmojiType}/>
      {popularText && (<div className={styles.text}>
          <h2>Most Popular..</h2>
        </div>
      )}
      <div className={styles.parent}>
        { !emojisData.length ? (
            <h1>Oops.....  🤦🏼 Emoji Not Fount!</h1>
          ) : (
            emojisData.map((emoji) => {
                return <EmojiCard  key={emoji.title}{...emoji}/>
            })
          )
        }
      </div>
    </>
  )
}
