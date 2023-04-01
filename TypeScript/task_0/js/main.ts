interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = { // Variable student1
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 27,
    location: 'gotham city',
};

const student2: Student = { // Variable student2
    firstName: 'Clark',
    lastName: 'Kent',
    age: 30,
    location: 'Metropolis',
};

const studentList: Student[] = [student1, student2]; // Store variables in array

const table = document.createElement('table'); // create a  table

studentList.forEach((student) => { // Render a table
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

document.body.appendChild(table);
