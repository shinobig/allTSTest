/* const person: {
  name: string;
  age: number;
} = */

enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR
};

const person = {
  name : "vic",
  age: 30,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN,
};



let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}


