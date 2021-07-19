// creo un oggetto studente
var studente = {
    firstName : 'Paolo',
    lastName : 'Rossi',
    age : 25,
}

for (var key in studente){
    console.log(studente[key]);
}

//  Creo una lista di oggetti studente
var studentsList = [
    {
        firstName : 'Paolo',
        lastName : 'Rossi',
        age : 25,
    },
    {
        firstName : 'Luca',
        lastName : 'Verdi',
        age : 18,
    },
];

console.table(studentsList);

do {
    var userFirstName = prompt("Inserisci il nome");
} while (!userFirstName || userFirstName.trim() ==="");
do {
    var userLastName = prompt("Inserisci il cognome");
} while (!userLastName || userLastName.trim() ==="");
do {
    var userAge = parseInt(prompt("Inserisci l'età"));
} while (!userAge || isNaN(userAge));

addStudent(userFirstName, userLastName, userAge, studentsList);

console.table(studentsList);



// Aggiungo un nuovo ogetto studente ad un array

function addStudent(firstName, lastName, age, studentList) {
    let newStudent = {
        firstName : firstName,
        lastName : lastName,
        age : age,
    }

    studentList.push(newStudent);
    return studentList;
}
