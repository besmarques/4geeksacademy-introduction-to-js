function sing(){
    var song = "";
    for (var i = 1; i <= 12; i++){
        if (i == 5 ){
            song += "whisper words of wisdom, ";
        }else if ( i == 11){
            song += "there will be an answer, ";
        } else if ( i == 12){
            song += "let it be";
        }
        else {
           song += "let it be, ";
        }
    }
    return song;
}

//Your code above ^^^

console.log(sing());