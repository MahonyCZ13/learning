using System;

namespace csharptuto.lessons
{
    class nestedLoop
    {
        public static void execNest()
        {
            Console.WriteLine("Lesson 12.3\n");
            int i, j;

            for (i = 2; i < 100; i++)
            {
                for (j = 2; j < 100; j++)
                if ((i % j) == 0) break;
                if (j > (i / j))
                Console.WriteLine($"{i} is a prime number!");
            }
            Console.ReadLine();
        }
    }
}