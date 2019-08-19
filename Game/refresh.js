function refresh() {
    let gameover = document.getElementById('canvas-background');
    gameover.style.transition = "0.5s"
    gameover.style.display = "flex";
    let reFresh = `
    <div id="refresh">
        <img id="image" src="refresh.png" alt="">
    <div>
    <span>Your score:</span>
    </div>
    <div id="button" >
        <button id="refreshBtn">
            <img src="refresh-button.png" alt="">
        </button>
    </div>    
    </div>    
`
gameover.innerHTML += reFresh;
// let homeBtn = document.getElementById('homeBtn')
// homeBtn.addEventListener('click',function(){ location.reload()})
let refreshBtn = document.getElementById('refreshBtn')
refreshBtn.addEventListener('click',function(){ location.reload()})
}