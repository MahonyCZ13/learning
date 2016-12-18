using System;

namespace OperatorsExpressionsStatements
{
    class Program
    {
        static void Main(string[] args);
        {
            
            // Variable declaration
            int x, y, a, b;

            // Assignment operator
            x = 3;
            y = 2;
            a = 1;
            b = 0;

            // There are many mathematical operators...

            // Addition operator
            x = 3 + 4;

            // Substraction operator
            x = 4 - 3;

            // Multiplication operator
            x = 10 * 5;

            // Division operator
            x = 10 / 2;

            // Order of operations using parenthesis
            x = (x + y) * (a - b);

            // There are many operators used to evaluates values...

            // Equality operator
            if (x == y)
            {                
            }

            // Greater than operator
            if (x > y)
            {    
            }

            // Less than operator
            if (x < y)
            {
            }

            // Greater or equal operator
            if (x >= y)
            {   
            }

            // Less or equal operator
            if (x <= y)
            {
            }

            // There are "conditional" operators as well that can
            // be used to expand / enhance an evaluation ...
            // ... and they can be combined multiple times.

            // Conditional AND operator
            if ((x > y) && (a > b))
            {
            }

            //Condotional OR operator
            if ((x > y) || (a > b))
            {
            }

            // Inline conditional operator
            string message = (x == 1) ? "true" : "false";

            // Member accessor operator "." and Method invocation operator "()"
            Console.WriteLine("Hello");
        
        }
    }
}
