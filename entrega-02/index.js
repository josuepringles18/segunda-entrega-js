function mostrarPuntos(puntos) {
	alert("Tus puntos son " + puntos + " !!");
}

function numeroAleatorio(minimo, maximo) {
	return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

//localStorage agregado para segunda entrega
let nombre = localStorage.getItem("usuario registrado");

if (nombre == null) {
	while (true) {
		nombre = (prompt("Hola, Bienvenido/a esta aventura de este pequeño juego de adivinanza. Ingresa tu nombre para continuar"))
		if (!nombre) continue;
		break;
	}
}
localStorage.setItem('usuario registrado', nombre)

alert("Saludos  " + nombre + ", comenzaremos el juego!! \n Este tratara de adivinanzas, donde puedes ganar o perder puntos. Vamos a empezar");

let puntos = 100;

mostrarPuntos(puntos)

const personajes = ["Sherlock", "Einstein", "Tony", "Sheldon", "Rocket"];

let personajeElegido = ""

while (personajeElegido !== null) {

    personajeElegido = prompt("Personaje a elegir:\n 1)Sherlock\n 2)Einstein\n 3)Tony\n 4)Sheldon \n 5)Rocket");

	let personajeSeleccionado = parseInt(personajeElegido);

	while (isNaN(personajeSeleccionado) || personajeSeleccionado < 1 || personajeSeleccionado > 5) {
		alert("Elegi un personaje del 1 al 5")
		personajeElegido = prompt("$ Personaje a elegir:\n 1)Sherlock\n 2)Einstein\n 3)Tony\n 4)Sheldon \n 5)Rocket");
		personajeSeleccionado = parseInt(personajeElegido);
	}

	personajeElegido = personajeSeleccionado - 1;

	const personaje = personajes[personajeElegido];

	alert("¡¡Genial!! Elegiste a " + personajes[personajeElegido] + ", ahora comenzaremos con la adivinanza!!")

	switch (personaje) {
		case "Sherlock":
			{
				const numeroAdivinar = prompt("“Elemental, mi querido jugador… He elegido un número del 1 al 10. ¿Podrás deducir cuál es?”");
				const numeroDelPersonaje = numeroAleatorio(1, 10);

				if (numeroAdivinar == numeroDelPersonaje) {
					alert("Interesante. Has deducido correctamente. Mi número era efectivamente " + numeroDelPersonaje + ".");
					puntos += 10;
				} else {
					alert("“Deducción incorrecta. El número era " + numeroDelPersonaje + ". Sigue intentándolo, la observación es la clave.”");
					puntos -= 10;
				}
			}

			mostrarPuntos(puntos);
			break;

		case "Einstein":
			{
				const numeroAdivinar = prompt("“La imaginación es más importante que el conocimiento. He pensado en un número entre 1 y 20. ¿Puedes adivinar cuál es?”");
				const numeroDelPersonaje = numeroAleatorio(1, 20);
				if (numeroAdivinar == numeroDelPersonaje) {
					alert("“¡Asombroso! Has igualado mi nivel de intuición. El número era " + numeroDelPersonaje + ".”");
					puntos += 10;
				} else {
					alert("“La relatividad no estuvo de tu lado esta vez. El número era " + numeroDelPersonaje + ".”");
					puntos -= 10;
				}
			}
			mostrarPuntos(puntos);
			break;

		case "Tony":
			{
				const numeroAdivinar = prompt("“Ok, genio. Elegí un número del 1 al 5. A ver si tu CPU corporal lo procesa.”");
				const numeroDelPersonaje = numeroAleatorio(1, 5);
				if (numeroAdivinar == numeroDelPersonaje) {
					alert("“Bueno bueno… nada mal, crack. Ese era mi número: ”" + numeroDelPersonaje + ".”");
					puntos += 15;
				} else {
					alert("“Error del sistema… el número correcto era " + numeroDelPersonaje + ". Jarvis, mostrale cómo se hace.”");
					puntos -= 15;
				}
			}
			mostrarPuntos(puntos);
			break;
		case "Sheldon":
			{
				const numeroAdivinar = prompt("“He escogido un número del 1 al 25. Las probabilidades de acertar son del 10%. Buena suerte… la necesitarás.”");
				const numeroDelPersonaje = numeroAleatorio(1, 25);
				if (numeroAdivinar == numeroDelPersonaje) {
					alert("“¡Bazinga! ¡Correcto! El número era " + numeroDelPersonaje + "! Debiste usar la teoría correcta.”");
					puntos += 10;
				} else {
					alert("“Incorrecto. Deberías revisar tus cálculos. El número era ”" + numeroDelPersonaje + ".”");
					puntos -= 20;
				}
			}
			mostrarPuntos(puntos);
			break;
		case "Rocket":
			{
				const numeroAdivinar = prompt("“Ey, humano, elegí un número del 1 al 2. A ver si sos más listo que Star-Lord.”");
				const numeroDelPersonaje = numeroAleatorio(1, 2);
				if (numeroAdivinar == numeroDelPersonaje) {
					alert("“Bueno, ¡mierda! ¡Le acertaste! El número era " + numeroDelPersonaje + ".”");
					puntos += 7;
				} else {
					alert("“JAJAJA ¡ni cerca! El número era " + numeroDelPersonaje + ". Dale, no te rindas, peludo.”");
					puntos -= 11;
				}
			}
			mostrarPuntos(puntos);
			break;
		default:
			alert("Personaje no reconocido. Fin del juego.");
	}

	const seguir = confirm("¿Querés elegir otro personaje?");
	if (!seguir) break;
}

alert("Gracias por jugar " + nombre + "! Tus puntos finales son: " + puntos);