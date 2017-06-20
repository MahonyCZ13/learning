using System;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FirstApp
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                displayUsers();
            }
        }

        // read the database and display users
        protected void displayUsers()
        {
            using (SqlConnection conn = new SqlConnection(GetSqlConnection()))
            {
                using (SqlCommand cmd = new SqlCommand("SELECT * FROM users", conn))
                {
                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        sda.Fill(dt);
                        users.DataSource = dt;
                        users.DataBind();
                    }
                }
            }
            
        }

        // insrt into database a new user
        private void executeInsert(string id, string name)
        {
            // estabilishing the connection
            SqlConnection conn = new SqlConnection(GetSqlConnection());

            // preparing the query string
            string sql = "INSERT INTO users (ID, userName) VALUES (@ID, @userName)";

            // attempt to insert into DB
            try
            {
                conn.Open();

                // creating object with the connection and sql query
                SqlCommand cmd = new SqlCommand(sql, conn);

                // creating paramaters for the insertion
                SqlParameter[] param = new SqlParameter[2];

                // defining paramaters
                param[0] = new SqlParameter("@ID", SqlDbType.Int);
                param[1] = new SqlParameter("@userName", SqlDbType.VarChar);

                // assigning variables to parameters
                param[0].Value = id;
                param[1].Value = name;

                // insert items one by one into the database
                for (int i = 0; i < param.Length; i++)
                {
                    cmd.Parameters.Add(param[i]);
                }

                cmd.CommandType = CommandType.Text;
                cmd.ExecuteNonQuery();
            }
            catch (SqlException error)
            {
                string msg = "Something went wrong... Here is the error message: ";
                msg += error.Message;
                throw new Exception(msg);
            }
            finally
            {
                conn.Close();
            }
        }

        // Button action
        protected void addUsers(object sender, EventArgs e)
        {
            // gathering data from the form
            executeInsert(TxtID.Text, TxtUser.Text);
            Response.Write("Save succeded!");
            ClearContext(Page);
        }

        // clear form insert attempt to database
        public static void ClearContext(Control Parent)
        {
            if (Parent is TextBox)
            {
                (Parent as TextBox).Text = string.Empty;
            }
            else
            {
                foreach (Control c in Parent.Controls)
                {
                    ClearContext(c);
                }
            }
        }

        // getting the sql connection
        public string GetSqlConnection()
        {
            return ConfigurationManager.ConnectionStrings["DEVDBEntities"].ConnectionString;
        }
        
    }
}