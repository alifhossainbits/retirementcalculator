function ageCalculate(putBirthyear) {
  return 2023 - putBirthyear;
}

function retirementCalculate(birthday, nam) {
  const age = ageCalculate(birthday);
  const retired = 59 - age;

  if (age < 0) {
    return `${nam} hasn't been born yet!`;
  } else if (retired > 0) {
    return `${nam} still has ${retired} years left for retirement! and ${age} years old!`;
  } else {
    return `${nam} has already retired!`;
  }
}

document.getElementById("submit").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const birthYear = document.getElementById("birthYear").value;
  const output = document.getElementById("output");
  output.innerHTML = retirementCalculate(birthYear, name);
});
