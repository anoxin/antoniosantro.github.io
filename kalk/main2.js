var btn = document.getElementById('7');
var display = document.getElementById('display');

btn.addEventListener('click', function (e) {
	alert('Вы нажали на кнопку 7! Не надо так делать');
});	


display.addEventListener('keyup', function (e) {
	alert(e.target.value);
});	

var btns = document.querySelectorAll('.btn');
var display = document.getElementById('display');

var handleClick = function (e) {
	var value = e.target.textContent;
	display.value = value;
};

for (var i = 0; i < btns.length; i++) {
	var btn = btns[i];

	btn.addEventListener('click', handleClick);
};