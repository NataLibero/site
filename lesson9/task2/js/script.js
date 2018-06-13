let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", ее возраст " + this.value);
}

showUser.call(age, "Iakushko", "Natalia");