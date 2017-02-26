//рекурсія

function fibonacci(n) {
  if(n <= 1){ 
      return n;
      }else{ 
        return  fibonacci(n - 1) + fibonacci(n - 2);
      }
}
var n = Number(prompt("Number of Fibonacci?"));//номер чила фібоначі
document.write(fibonacci(n));
alert( fibonacci(n) );
document.write('<br>');
//цикл

function fibonacciCycle(n) {
  var a = 1, b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
var n = Number(prompt("Number of Fibonacci?"));//номер чила фібоначі за допомогою циклу
document.write(fibonacciCycle(n));
alert( fibonacciCycle(n) );
