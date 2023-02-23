
/*--
window.onload = function () {

    function onClick() {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.black_bg').style.display = 'block';
    }
    function yClick() {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.black_bg').style.display = 'none';

        const resultElement = document.getElementById('result')
        let number = resultElement.innerText;

        if(number <= 0) {
            resultElement.innerText = number - 0;
        }else if(number >= 1){
            resultElement.innerText = number - 1;
        }
    }
    function nClick() {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.black_bg').style.display = 'none';
    }

    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_btn_y').addEventListener('click', yClick);
    document.querySelector('.modal_btn_n').addEventListener('click', nClick);
}

function count(type) {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    // 더하기/빼기
    if (type === 'plus') {
        number = parseInt(number) + 1;
    }
    // 결과 출력
    resultElement.innerText = number;
}
--*/

var result = 0;

var n = function(){
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.black_bg').style.display = 'none';
}

var y = function(){
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.black_bg').style.display = 'none';

    const resultElement = document.getElementById('result')
    let number = resultElement.innerText;

    if(number <= 0) {
        resultElement.innerText = number - 0;
    }else if(number >= 1){
        resultElement.innerText = number - 1;
    }
}

var plus = function(){
    let number = document.querySelector("#result").innerText;
    result=parseInt(number)+1;
    document.querySelector("#result").innerText=result;
}

var minus = function(){
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.black_bg').style.display = 'block';

    if(document.querySelector('.modal_btn_y').addEventListener('click', y)){
        y();
    }else if(document.querySelector('.modal_btn_n').addEventListener('click', n)){
        n();
    }
}













