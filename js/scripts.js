function neighborhood(num) {
  let numArray = []
  let finalSongArray = []
  for(let i = 0; i <= num; i++) {
    let updatedSongArray = i.toString()
    console.log(updatedSongArray)
    
    if(updatedSongArray.includes("3")) {
      finalSongArray.push(" Won't you be my Neighbor?")
    } else if(updatedSongArray.includes("2")) {
      finalSongArray.push(" Boop!")
    } else if(updatedSongArray.includes("1")) {
      finalSongArray.push(" Beep!")
    } else {
      finalSongArray.push(updatedSongArray)
    }
  } 
}

