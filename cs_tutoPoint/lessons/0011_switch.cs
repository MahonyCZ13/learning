using System;

namespace csharptuto.lessons
{
    class switchState
    {
        public static void execSwitch()
        {
            char grade = 'B';

            switch(grade)
            {
                case 'A':
                Console.WriteLine($"Excellent! You've got {grade}");
                break;
                case 'B':
                Console.WriteLine($"Good! You've got {grade}");
                break;
                case 'C':
                Console.WriteLine($"Mediocare! You've got {grade}");
                break;
                case 'D':
                Console.WriteLine($"Study for the next time! You've got {grade}");
                break;
                case 'E':
                Console.WriteLine($"Again! You've got {grade}");
                break;
                default:
                Console.WriteLine("Invalid grade");
                break;
            }

            Console.ReadLine();
        }
    }
}