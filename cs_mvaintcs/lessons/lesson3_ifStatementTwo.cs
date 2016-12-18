using System;

namespace ifStatementTwo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Giveaway no.2 everybody!");
            Console.Write("Enter 1 and win something awesome like last time: ");
            string userValue = Console.ReadLine();

            string message = (userValue == "1") ? "used toilet paper" : "Nothing. You can't read moron...";

            Console.WriteLine("You typed {0} and won {1}. Congrats mate!", userValue, message);
            Console.ReadLine();
        }
    }
}