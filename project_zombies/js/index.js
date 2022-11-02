//window, onload = () => App.init()
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        App.init()

    }
};