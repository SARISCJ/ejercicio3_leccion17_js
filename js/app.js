var n = prompt("Ingresa un número del 1 al 100");

if (n%2 != 0 ) {
	window.alert ("Odd!");
} else if (n%2==0 && 2<=n && n<=5) {
	window.alert ("Good!");
} else if (n%2==0 && 6<=n && n<=20) {
	window.alert ("Great!");
}
else {
	window.alert ("Perfect!");			
}

