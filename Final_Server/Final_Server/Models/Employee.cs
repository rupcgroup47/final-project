﻿using System;

namespace Final_Server.Models
{
    public class Employee
    {
        string userEmail;
        string userpassword;
        int userNum;
        string userId;
        string userFName;
        string userLName;
        string userGender;
        DateTime userInsertDate = new DateTime();
        bool is_Active;
        bool is_Admin;
        bool userType;

        static List<Employee> EmployeesList = new List<Employee>();

        public string UserEmail { get => userEmail; set => userEmail = value; }
        public string Userpassword { get => userpassword; set => userpassword = value; }
        public int UserNum { get => userNum; set => userNum = value; }
        public string UserId { get => userId; set => userId = value; }
        public string UserFName { get => userFName; set => userFName = value; }
        public string UserLName { get => userLName; set => userLName = value; }
        public string UserGender { get => userGender; set => userGender = value; }
        public DateTime UserInsertDate { get => userInsertDate; set => userInsertDate = value; }
        public bool Is_Active { get => is_Active; set => is_Active = value; }
        public bool Is_Admin { get => is_Admin; set => is_Admin = value; }
        public bool UserType { get => userType; set => userType = value; }

        public Employee Read(string UserEmail, string Userpassword) //get all user details that fit to the userEmail & userPassword
        {
            DBservices dbs = new DBservices();
            Employee employee = new Employee();
            employee = dbs.GetUserLoginDetails(UserEmail, Userpassword);
            return employee;
        }

        public static List<Employee> ReadEmployees() //Read all user (active + not active)
        {
            DBservices dbs = new DBservices();
            return dbs.GetAllUsers();

        }

        public int InsertEmployee() //Insert new user (Employee)
        {
            DBservices tmp = new DBservices();

            //List<string> List = tmp.ReadAllUsersEmails(); //Befor read all existing Emails

            //if (List.Count > 0)
            //{
            //    foreach (string email in List)
            //    {
            //        if (this.UserEmail == email)
            //        {
            //            Console.WriteLine("This Email is already exist");
            //            return 0;
            //        }
            //    }
            //}

            return tmp.InsertEmployee(this);
        }


        public int UpdateUserDetails(string userEmail, string userFName, string userLName, string userGender) //Update user datails
        {
            DBservices tmp = new DBservices();
            return tmp.UpdateUserDetails(userEmail, userFName, userLName, userGender);

        }

        public int UpdateActive(string userEmail, bool isActive) //Update user feild "is_active"
        {
            DBservices tmp = new DBservices();

            return tmp.UpdateUserActive(userEmail, isActive);
        }
    }

}
