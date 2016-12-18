using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("What is your first name?");
            string firstName = Console.ReadLine();

            Console.WriteLine("What is your last name name?");
            string lastName = Console.ReadLine();

            Console.WriteLine("Where were you born?");
            string birthPlace = Console.ReadLine();

            DisplayResults(ReverseString(firstName), ReverseString(lastName), ReverseString(birthPlace));

        }

        private static string ReverseString(string msg)
        {
            char[] messageArray = msg.ToCharArray();
            Array.Reverse(messageArray);
            return String.Concat(messageArray);
        }

        private static void DisplayResults(string reversedFirstName, string reversedLastName, string reversedBirthPlace)
        {
            Console.Write(String.Format("{0} {1} {2}", reversedFirstName, reversedLastName, reversedBirthPlace));
            Console.ReadLine();
        }
    }
}
