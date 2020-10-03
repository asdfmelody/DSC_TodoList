var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');

var count = 1;

button.addEventListener('click', clickButton);

function clickButton(){
    var li = document.createElement('li');

    li.setAttribute("id", "li"+count);
    li.setAttribute("class","list-group");

    li.innerHTML = input.value; //input을 받은 값을 li안의 html 코드에 넣어주겟다.
    li.innerHTML += "<button id='delete' onclick='remove("+count+")'>삭제</button>"
 
    list.appendChild(li);

    input.value = "";

    count = count+1; //count++
}

function remove(count) {
    var li=document.getElementById("li"+count);
    list.removeChild(li);
}