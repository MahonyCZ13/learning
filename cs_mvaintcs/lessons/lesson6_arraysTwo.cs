using System;

namespace ArraysTwo
{
    class Program
    {
        static void Main(string[] args)
        {
            string zig = "If you want something from life " +
            "be sure to give it melons. Life loves melons...";

            char[] charArray = zig.ToCharArray();
            Array.Reverse(charArray);

            foreach (char zigChar in charArray)
            {
                Console.Write(zigChar);
            }
            Console.ReadLine();
        }
    }
}