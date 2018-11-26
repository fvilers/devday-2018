// in or of?
const names = ['Renaud', 'Olivier', 'Adrien', 'Matthieu', 'Denis'];
for (const name in names) {
  console.log(name);
}

for (const name of names) {
  console.log(name);
}
