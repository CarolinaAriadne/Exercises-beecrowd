// 1051 URI c#

// using System;
// using System.Globalization;

// class URI {

//     static void Main(string[] args) { 

//         double salario;
//         double subtrai = 0.0;
//         double imposto = 0.0;
//         double conta = 0.0;
//         double conta2 = 0.0;
        
//         salario = double.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
        
//         if (salario >= 0 && salario <= 2000.0) {
//             Console.WriteLine("Isento");
//         }
//         if (salario > 4500.0) {
//             subtrai = salario - 4500.0;
  
//             imposto = subtrai * 0.28;
  
//             conta = 4500.0 - 3000.01;
  
//             conta = conta * 0.18;
  
//             conta2 = 3000.0 - 2000.0;
            
//             conta2 = conta2 * 0.08;
  
//             imposto = imposto + conta + conta2;

//             Console.WriteLine("R$ " + imposto.ToString("F2", CultureInfo.InvariantCulture));
//         }
        
//         if (salario >= 3000.01 && salario <= 4500.0) {
            
//             subtrai = salario - 3000.01;
 
//             imposto = subtrai * 0.18;
  
//             conta = 3000.0 - 2000.0;
  
//             conta2 = conta * 0.08;
  
//             imposto = imposto + conta2;

//             Console.WriteLine("R$ " + imposto.ToString("F2", CultureInfo.InvariantCulture));
        
//         }
        
//         if (salario >= 2000.01 && salario <= 3000.0) {
//             subtrai = salario - 2000.0;
 
//             imposto = subtrai * 0.08;
  
//             Console.WriteLine("R$ " + imposto.ToString("F2", CultureInfo.InvariantCulture));

//         }

//     }

// }