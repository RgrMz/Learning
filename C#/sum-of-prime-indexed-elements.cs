using System;

/* Computes the sum of the elements located in a prime index of the array passed as parameter */ 

public class Solution
{
    public static int solve(int [] arr){  
      int result = 0;
      for(int i=0; i<= arr.Length - 1; i++) {
        if(isIndexPrime(i))
          result += arr[i];
        }
       return result;
    }
  
    static bool isIndexPrime(int n) { 
        // Corner case 
        if (n <= 1) 
            return false; 
      
        // Check from 2 to n-1 
        for (int i = 2; i < n; i++) 
            if (n % i == 0) 
                return false; 
      
        return true; 
    } 
      
  }
