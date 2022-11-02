window, onload = () => {

    document.getElementById("starButton").addEventListener("click", startGame)
}
// window.onload = () => {
//     document.getElementById('start-button').onclick = () => {
//         startGame();
//     };

function startGame() {
    document.getElementById("starButton").style.display = "none"
    App.init()

}
