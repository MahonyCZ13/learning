using System;

namespace csharptuto.lessons
{
    class forLoop
    {
        public void execForLoop()
        {
            Console.WriteLine("Lesson 12.1\n");
            for (int a = 10; a < 20; a = a + 1) // we could use increment operator (a++) here.
            {
                Console.WriteLine($"Value of a is {a}");
            }
            Console.ReadLine();
        }
    }
}