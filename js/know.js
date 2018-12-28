var timerViewHistory=1,
    historyPara=document.getElementById("history");
function loopHistory() {
  var history = "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.";

  if (timerViewHistory<=history.length ) {
    var txt = history.substring(0,timerViewHistory);
    historyPara.innerHTML = txt;
    if (timerViewHistory%2===0) {
      historyPara.style.color="blue"
    } 
    setTimeout('loopHistory()',100);
    timerViewHistory++;
  }
  // } else {
  //  timerViewHistory=1;
  //  historyPara.innerHTML="";
  //  setTimeout('loopHistory()',1000)
  // }
}
loopHistory()