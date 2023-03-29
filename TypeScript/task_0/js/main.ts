interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 27,
    location: 'gotham city',
};

const student2: Student = {
    firstName: 'Clark',
    lastName: 'Kent',
    age: 30,
    location: 'Metropolis',
};

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');

studentList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});

document.body.appendChild(table);
