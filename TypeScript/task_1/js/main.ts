export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Wick',
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: 'New York',
  contract: false,
}

console.log(teacher1);