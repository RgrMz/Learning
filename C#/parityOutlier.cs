using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
  public static int Find(int[] integers) {
    
    
    int evens = 0, odds = 0, result;
    foreach(int number in integers) 
      if(number%2 == 0)  evens++; else odds++;
      
    if(evens > odds)  
      result = findOdd(integers);
    else
      result = findEven(integers);
    Console.WriteLine(result);
    return result;
  }
              
  public static int findOdd(int[] integers) {
    int odd=0;
    foreach(int number in integers) {
      int aux = number % 2;
      odd = aux != 0 ? number : 0;
      if(odd > 0) break;
    }
    return odd;
  }
  
  public static int findEven(int[] integers) {
    int even = 0;
    foreach(int number in integers) {
      int aux = number%2;
      even = aux == 0 ? number : 0;
      if(even > 0) break;
    }
    return even;
  }
}