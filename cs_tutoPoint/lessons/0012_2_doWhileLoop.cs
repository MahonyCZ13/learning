using System;

namespace csharptuto.lessons
{
    class doWhile
    {
        public static void execdoWhile()
        {
            Console.WriteLine("Lesson 12.2\n");

            int a = 10;

            do
            {
                Console.WriteLine($"Value of A is {a}");
                a++;
            }
            while(a < 20);

            Console.ReadLine();
        }
    }
}