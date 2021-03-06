'use strict';

var docStyle = document.documentElement.style;
var aElem = document.querySelector('a');

aElem.onmousemove = function (e) {

	var boundingClientRect = aElem.getBoundingClientRect();

	var x = e.clientX - boundingClientRect.left;
	var y = e.clientY - boundingClientRect.top;

	var xc = boundingClientRect.width / 2;
	var yc = boundingClientRect.height / 2;

	var dx = x - xc;
	var dy = y - yc;

	docStyle.setProperty('--rx', dy / -1);
	docStyle.setProperty('--ry', dx / 10);
};

aElem.onmouseleave = function (e) {

	docStyle.setProperty('--ty', '0');
	docStyle.setProperty('--rx', '0');
	docStyle.setProperty('--ry', '0');
};

aElem.onmousedown = function (e) {

	docStyle.setProperty('--tz', '-25');
};

document.body.onmouseup = function (e) {

	docStyle.setProperty('--tz', '-12');
};