using System;

namespace ArraysOne
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            // Creating an Arrays

            int[] numbers = new int[5];

            numbers[0] = 4;
            numbers[1] = 8;
            numbers[2] = 15;
            numbers[3] = 16;
            numbers[4] = 23;

            // Get the specific value from the array using its index
            // Console.WriteLine(numbers[2]);

            Console.WriteLine(numbers.Length);
            Console.ReadLine();
            */

            // Declare Array on the same line (integer)
            // int[] numbers = new int[] {4, 8, 15, 16, 23}

            //Declare Array on the same line (string)
            string[] names = new string[] {"Billy", "Murph", "Scott", "Pirate Banjo"};

            /*
            // FOR iteration version
            for(int i = 0; i < names.Length; i++)
            {
                Console.WriteLine(names[i]);
            }
            Console.ReadLine();
            */

            //FOREACH iteration version
            foreach(string name in names)
            {
                Console.WriteLine(name);
            }
            Console.ReadLine();
        }
    }
}