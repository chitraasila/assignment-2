const side1 = 10;
const side2 = 20;
const side3 = 30;

function triangle(s1, s2, s3) {
  let result = "";
  if (s1 === s2 && s2 === s3) {
    result = "Equilateral Triangle";
  } else if (s1 === s2 || s1 === s3 || s3 === s2) {
    result = "Isosceles Triangle";
  } else if (s1 !== s2 && s2 !== s3) {
    result = "Scalene Triangle";
  }
  return result;
}

const result = triangle(side1, side2, side3);
console.log(result);
