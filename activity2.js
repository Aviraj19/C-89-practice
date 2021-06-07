function get_score() {
score=localStorage.getItem("score_key");
document.getElementById("score").innerHTML="score:"+score;
}
function Back(){
   window.location="activity_1.html"
}