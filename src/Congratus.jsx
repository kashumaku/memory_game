import React from 'react'

const Congratus = () => {
  return (
    <div style={{position:'absolute', top:0, width:"100%", height:"100vh", background:"linear-gradient(green, yellow, red)",
        display:"flex", justifyContent:"center", alignItems:"center"
    }}>
      <h1 style={{color:'blue'}}>Congratulations! You win the game</h1>
    </div>
  )
}

export default Congratus
