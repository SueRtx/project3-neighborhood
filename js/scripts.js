function neighborhood(num) {
  let numArray = [];
  let finalSongArray = [];
  for(let i = 0; i <= num; i++) {
    let updatedSongArray = i.toString();
    if(updatedSongArray.includes("3")) {
      return true;
    } else if(updatedSongArray.includes("2")) {
      return " Boop!"
    }
  }
}
