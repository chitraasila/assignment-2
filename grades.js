const marks = 67;
let grade = "";
switch (true) {
  case marks > 90 && marks <= 100:
    grade = "S";
    break;
  case marks > 80 && marks <= 90:
    grade = "A";
    break;
  case marks > 70 && marks <= 80:
    grade = "B";
    break;
  case marks > 60 && marks <= 70:
    grade = "C";
    break;
  case marks > 60 && marks <= 50:
    grade = "D";
    break;
  case marks > 40 && marks <= 50:
    grade = "E";
    break;
  case marks > 0 && marks <= 40:
    grade = "Failed";
    break;
  default:
    grade = "Invalid marks";
}
console.log(grade);
