using System;

namespace csharptuto.lessons
{
    class whileLoop
    {
        public void execLoop()
        {
            int a = 10;

            Console.WriteLine("Lesson 12\n");

            while(a < 20)
            {
                Console.WriteLine($"Value of A is {a}");
                a++;
            }
            Console.ReadLine();
        }
    }
}