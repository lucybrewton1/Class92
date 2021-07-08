function addUser() {
    User1=document.getElementById("player1Name").value;
    localStorage.setItem("User1",User1);
    User2=document.getElementById("player2Name").value;
    localStorage.setItem("User2",User2);
    window.location="game_page.html";
}