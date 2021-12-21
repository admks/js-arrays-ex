
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

attendances.push(["Ali", 11],["Veli", 10],["John", 9]);
console.log(attendances);

attendances[2][1]=9;
console.log(attendances);

console.log(`"bugün sınıfa  toplam ${attendances.length} öğrenci geldi.İlk öğrencinin adı ${attendances[0][0]} ve son öğrencinin adı ${attendances[attendances.length-1][0]}"`);

let ortalama= (attendances[0][1]+attendances[1][1]+attendances[2][1]+attendances[3][1]+attendances[4][1]+attendances[5][1]+attendances[6][1]+attendances[7][1]+attendances[8][1])/attendances.length;

console.log(ortalama.toFixed(2));

attendances.shift();
console.log(attendances);
attendances.splice(2,1);

console.log(`${attendances.length} kişi ile dersi bitirdik.`);



// let yeniDizi=attendances.join();
// yeniDizi=yeniDizi.split(",");
// yeniDizi=yeniDizi.sort();
// console.log(yeniDizi);