using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Project1API.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Project1API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public EmployeeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                                SELECT Id, FirstName, LastName, StaffNumber, NextOfKinID,
                                    DesignationID, RoleID, Title, LeaveDaysAvailable, Email,
                                    EmailConfirmed, PasswordHash, SecurityStamp, PhoneNumber, PhoneNumberConfirmed
                                    TwoFactorEnabled, LockoutEndDateUtc, LockoutEnabled, 
                                    AccessFailedCount, UserName, DateOfBirth
                                FROM [LeaveAppDB].[dbo].[User]";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DevConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Employee emp)
        {
            string query = @"
                                INSERT INTO [LeaveAppDB].[dbo].[User] 
                                VALUES   
                                (
                                    '" + emp.Id + @"'
                                    ,'" + emp.FirstName + @"'
                                    ,'" + emp.LastName + @"'
                                    ,'" + emp.StaffNumber + @"'
                                    ,'" + emp.NextOfKinID + @"'
                                    ,'" + emp.DesignationID + @"'
                                    ,'" + emp.RoleID + @"'
                                    ,'" + emp.Title + @"'
                                    ,'" + emp.LeaveDaysAvailable + @"'
                                    ,'" + emp.Email + @"'
                                    ,'" + emp.EmailConfirmed + @"'
                                    ,'" + emp.PasswordHash + @"'
                                    ,'" + emp.SecurityStamp + @"'
                                    ,'" + emp.PhoneNumber + @"'
                                    ,'" + emp.PhoneNumberConfirmed + @"'
                                    ,'" + emp.TwoFactorEnabled + @"'
                                    ,'" + emp.LockoutEndDateUtc + @"'
                                    ,'" + emp.LockoutEnabled + @"'
                                    ,'" + emp.AccessFailedCount + @"'
                                    ,'" + emp.UserName + @"'
                                    ,'" + emp.DateOfBirth + @"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DevConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Employee emp)
        {
            string query = @"
                    UPDATE [LeaveAppDB].[dbo].[User] SET 
                    FirstName = '" + emp.FirstName + @"'
                    ,LastName = '" + emp.LastName + @"'
                    ,NextOfKinID = '" + emp.NextOfKinID + @"'
                    ,DesignationID = '" + emp.DesignationID + @"'
                    ,RoleID = '" + emp.RoleID + @"'
                    ,Title = '" + emp.Title + @"'
                    ,LeaveDaysAvailable = '" + emp.LeaveDaysAvailable + @"'
                    ,Email = '" + emp.Email + @"'
                    ,EmailConfirmed = '" + emp.EmailConfirmed + @"'
                    ,PasswordHash = '" + emp.PasswordHash + @"'
                    ,SecurityStamp = '" + emp.SecurityStamp + @"'
                    ,PhoneNumber = '" + emp.PhoneNumber + @"'
                    ,PhoneNumberConfirmed = '" + emp.PhoneNumberConfirmed + @"'
                    ,TwoFactorEnabled = '" + emp.TwoFactorEnabled + @"'
                    ,LockoutEndDateUtc = '" + emp.LockoutEndDateUtc + @"'
                    ,LockoutEnabled = '" + emp.LockoutEnabled + @"'
                    ,AccessFailedCount = '" + emp.AccessFailedCount + @"'
                    ,UserName = '" + emp.UserName + @"'
                    ,DateOfBirth = '" + emp.DateOfBirth + @"'
                    where Id = " + emp.Id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DevConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{Id}")]
        public JsonResult Delete(int Id)
        {
            string query = @"
                    DELETE FROM [LeaveAppDB].[dbo].[User]
                    WHERE Id = " + Id + @" 
                    ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DevConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

        [Route("api/Employee/GetAllEmployees")]
        [HttpGet]
        public JsonResult GetAllEmployees()
        {
            string query = @"select * from [LeaveAppDB].[dbo].[User]";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DevConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


    }

}
