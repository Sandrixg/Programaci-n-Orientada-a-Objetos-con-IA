using System;

class ProgramaSaludo
{
    static void Main(string[] args)
    {
        // Preguntar por el nombre del usuario
        Console.Write("Por favor, introduce tu nombre: ");
        string nombre = Console.ReadLine();

        // Saludar al usuario
        Console.WriteLine("¡Hola, " + nombre + "!");

        // Esperar a que el usuario presione una tecla para cerrar el programa
        Console.WriteLine("Presiona cualquier tecla para salir.");
        Console.ReadKey();
    }
}



