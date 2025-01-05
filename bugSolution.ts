function greeter(person: string): string {
  return "Hello, " + person;
}

function greetMultiple(people: string[]): string {
  return people.map(person => greeter(person)).join("\n");
}

let user = ["Jane", "Doe"];
console.log(greetMultiple(user)); //Correct usage of array with function