import {useState} from 'react'
import {shuffle} from 'lodash'
import GameBoard from './GameBoard'
const App = () => {
// image files
  const images = [
    {
      type:"a",
      url:"https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
    },
    {
      type:"b",
      url:    "https://images.unsplash.com/photo-1591181520189-abcb0735c65d"
      ,
    },
    {
      type:"c",
      url:    "https://images.unsplash.com/photo-1496483648148-47c686dc86a8"
      ,
    },
    {
      type:"d",
      url:    "https://images.unsplash.com/photo-1442458017215-285b83f65851"
      ,
    },
    {
      type:"e",
      url:    "https://images.unsplash.com/photo-1520763185298-1b434c919102",
      
    },
    {
      type:"f",
      url:    "https://images.unsplash.com/photo-1546842931-886c185b4c8c",

    },
  ]
  const allImages = shuffle([...images, ...images])


  console.count("rendering...")
  return (
  <GameBoard images = {allImages}/>
  )
}
export default App


