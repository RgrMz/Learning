using System;
using System.Linq;
using System.Collections.Generic;

public class Brace {

    public static bool validBraces(String braces) {
      Console.WriteLine(braces);
      /* Checks if a string containing chars ()[]{} is balanced or not */
      
      Stack<char> bracesValidator = new Stack<char>();
      bool result = true;
      foreach(char brace in braces) {
        if(isOpening(brace))
          bracesValidator.Push(brace);
        else {
          if (bracesValidator.Count == 0) {
            result = false;
            break;
        }
          else {
            char open = bracesValidator.Pop();
            if(!arePaired(open,brace)) {
              result = false;
              break;
            }
          }
        }
      }
      if(bracesValidator.Count > 0) result = false;
      return result;
    }
  
    public static bool isOpening(char brace) {
      return brace == '(' || brace == '{' || brace == '[' ? true : false;
    }
  
    public static bool arePaired(char open, char close) {
      return ((open == '(' && close == ')') || (open == '{' && close == '}') || 
        (open == '[' && close == ']')) ? true : false;
    }
}