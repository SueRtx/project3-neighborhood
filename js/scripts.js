function neighborhood(num){
  let finalSongArray = [];
  if (Number.parseInt(num) < 0 || num == "") {
    let negNumber = ("Please enter a positive number!");
    finalSongArray = negNumber;
  } else if(Number.parseInt(num) >= 0) {
    for(let i = 0; i <= num; i++) {
    let updatedSongArray = i.toString();
      if(updatedSongArray.includes("3")) {
        finalSongArray.push(" Won't you be my Neighbor?");
      } else if(updatedSongArray.includes("2")) {
        finalSongArray.push(" Boop!");
      } else if(updatedSongArray.includes("1")) {
        finalSongArray.push(" Beep!");
      } else{
        finalSongArray.push(updatedSongArray);
      }
    } 
  } return finalSongArray ;
}

$(document).ready(function () {
  $("form#neighbor").submit(function (event) {
    event.preventDefault();
    const song = $("input#num").val();
    const output = neighborhood(song);
    $("#newSong").text(output);
    $("#outputSong").show();
    
    $(".clickable").click(function() {
      $(".walrus-showing").toggle();
      $(".walrus-hidden").toggle();
    });
  

  });
});

