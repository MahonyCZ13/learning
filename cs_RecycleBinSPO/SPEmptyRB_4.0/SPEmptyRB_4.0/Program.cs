using System;
using System.Security;
using Microsoft.SharePoint.Client;


namespace SPEmptyRB_4._0
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Sharepoint site.");
            string siteSP = Console.ReadLine();

            Console.WriteLine("Enter your email address for the server.");
            string userName = Console.ReadLine();
     
            Console.WriteLine("Enter your password.");
            SecureString password = GetPassword(); 

            using (var clientContext = new ClientContext(siteSP))
            {
                // SharePoint Online Credentials  
                clientContext.Credentials = new SharePointOnlineCredentials(userName, password);

                // Get the SharePoint web  
                Web web = clientContext.Web; //second level RB

                Site site = clientContext.Site; // first level RB

                // Delete all the recycle bin items                             
                site.RecycleBin.DeleteAll();

                // Execute the query to the server  
                clientContext.ExecuteQuery();

                Console.WriteLine("All items were deleted. Press any key to continue.");
                Console.ReadLine();
            }
        }

        private static SecureString GetPassword()
        {
            ConsoleKeyInfo info;

            //Get the user's password as a SecureString  
            SecureString securePassword = new SecureString();
            do
            {
                info = Console.ReadKey(true);
                if (info.Key != ConsoleKey.Enter)
                {
                    securePassword.AppendChar(info.KeyChar);
                }
            }
            while (info.Key != ConsoleKey.Enter);
            return securePassword;
        }
    }
}