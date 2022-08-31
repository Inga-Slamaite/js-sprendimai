//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

let a = 5;
let b = 7;
if (a>b) {
   console.log ('a>', a)
   
}else if(a<b){
   console.log ('b' ,b)
   
} else { 
   console.log ('lygus')
   
}




//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

// for(let i = 1; i < 11; i++){
//    console.log(i);
// }
   

 

   // 4.Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
   console.log('ketvirtas')
   function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min};

   for (let i = 1; i < 6; i++ ){
let randomSk = rand(1, 10)
   console.log(randomSk);
};


   //5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log ('penktas')
   function rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min};
  
      let n = rand (1, 10)

while (n < 5) {
  n++;
}
console.log (n);

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, 
//o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, 
//NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

