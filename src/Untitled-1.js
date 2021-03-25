function* sayHiGenerator() {
  yield "hey";
  return "hello";
}

const result = sayHiGenerator();

console.log(result.next());
console.log(result.next());
console.log(result.next());

for (const iterator of result) {
  console.log(iterator);
}
