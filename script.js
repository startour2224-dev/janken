// script.js
function playGame(playerHand) {
    const hands = ['✊', '✌️', '✋'];
    const cpuHand = hands[Math.floor(Math.random() * 3)];

    // 画面に表示
    document.getElementById('player-hand').textContent = playerHand;
    document.getElementById('cpu-hand').textContent = cpuHand;

    // 判定
    let result = "";
    if (playerHand === cpuHand) {
        result = "あいこでしょ！ 🤔";
    } else if (
        (playerHand === '✊' && cpuHand === '✌️') ||
        (playerHand === '✌️' && cpuHand === '✋') ||
        (playerHand === '✋' && cpuHand === '✊')
    ) {
        result = "きみの かち！ ✨おめでとう✨";
        startAnimation('player-hand');
    } else {
        result = "ざんねん！ まけちゃった 😭";
        startAnimation('cpu-hand');
    }

    document.getElementById('result-message').textContent = result;
}

function startAnimation(winnerId) {
    // 一旦アニメーションをリセット
    document.getElementById('player-hand').classList.remove('winner');
    document.getElementById('cpu-hand').classList.remove('winner');
    
    // 勝った方にアニメーションをつける
    setTimeout(() => {
        document.getElementById(winnerId).classList.add('winner');
    }, 10);
}