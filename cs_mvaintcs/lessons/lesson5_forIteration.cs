using System;

namespace forIteration
{
    class Program
    {
        static void Main(string[] args)
        {
            for(int i = 0; i < 10; i++)
            {
                Console.WriteLine(i);
                if(i == 6)
                {
                    Console.WriteLine("Found six!");
                    break;
                }
            }
            Console.ReadLine();
        }
    }
}