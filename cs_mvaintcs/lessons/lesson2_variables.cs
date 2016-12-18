using System;

namespace variables
{
    class Program
    {
        public static void Main(string[] args)
        {
            /*
            int x = 3;
            int y = x + 7;

            Console.WriteLine(y);
            Console.ReadLine();
            */

            Console.WriteLine("What is your name?");

            Console.Write("Type your first name: ");
            string myFirstName = Console.ReadLine();

            Console.Write("Type your last name: ");
            string myLastName = Console.ReadLine();

            Console.WriteLine("Hello " + myFirstName + " " + myLastName + ", nice to meet you!");
        }
    }
}