const rate = 42.28;
for (let dollar = 10; dollar <= 100; dollar += 10 ) {
  const hryvnia = dollar * rate;
  console.log(`${dollar} USD = ${hryvnia} UAH`);
}
