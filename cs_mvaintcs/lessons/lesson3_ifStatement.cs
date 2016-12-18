using System;

namespace ifStatement
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Giveaway shootout!");
            Console.Write("Enter 1, 2 or 3 to win something cool: ");
            string userValue = Console.ReadLine();
            string message = "";

            if (userValue == "1")
            {
                message = "You won a piece of paper! Great, isn't it?";
            }
            else if (userValue == "2")
            {
                message = "You won a rotten fish! Yuck...";
            }
            else if (userValue == "3") 
            {
                message = "You won a... eee...this used towel. Enjoy!";
            }
            else
            {
                message = "Wow, you are bad at this. You lost... Big time! heh...looser.";
            }
            Console.WriteLine(message);
            Console.ReadLine();
        }
    }
}