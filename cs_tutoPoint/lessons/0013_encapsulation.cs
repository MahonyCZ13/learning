using System;

namespace csharptuto.lessons
{
    class Rectangle
    {
        // memeber variables
        public double lenght;
        public double width;

        public double GetArea()
        {
            return lenght * width;
        }

        public void Display()
        {
            Console.WriteLine($"Length: {lenght}");
            Console.WriteLine($"Width: {width}");
            Console.WriteLine($"Area: {GetArea()}");
        }
    } // end of class Rectangle

    class ExecuteRectangle 
    {
        public static void execRec()
        {
            Console.WriteLine("Lesson 13\n");

            Rectangle r = new Rectangle();

            r.lenght = 4.5;
            r.width = 3.5;
            r.Display();
            Console.ReadLine();
        }
    }
}