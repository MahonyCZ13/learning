/*

TutorialsPoint - C#

https://www.tutorialspoint.com/csharp/csharp_encapsulation.htm

 */
using System;
using csharptuto.lessons;

namespace csharptuto
{
    class Program
    {
        static void Main(string[] args)
        {
            // Lesson 12
            whileLoop lesson12 = new whileLoop();
            lesson12.execLoop();

            // Lesson 12.1
            forLoop lesson121 = new forLoop();
            lesson121.execForLoop(); 

            // Lesson 12.2
            doWhile.execdoWhile();

            // Lesson 13
            //ExecuteRectangle lesson8 = new ExecuteRectangle(); - We don't need to call it because the execRec() method is static.
            ExecuteRectangle.execRec();
            
        }
    }
}
