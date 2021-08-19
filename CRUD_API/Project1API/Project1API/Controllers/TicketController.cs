using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Project1API.Models;

namespace Project1API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public TicketController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                                SELECT TicketID, EmployeeName, EmployeeMail, EmployeeCell, EmployeeStart,
                                    EmployeeEnd, EmployeeAddress, EmployeeAbsenceType, EmployeeManager, EmployeeID,
                                    EmployeeApproval
                                FROM Ticket";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DevConnection");
            SqlDataReader myReader;
            using(SqlConnection myCon=new SqlConnection(sqlDataSource))
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
        public JsonResult Post(Ticket ticket)
        {
            string query = @"
                                INSERT INTO Ticket 
                                VALUES   
                                (
                                    '" + ticket.TicketID + @"'
                                    ,'" + ticket.employeeName + @"'
                                    ,'" + ticket.employeeEmail + @"'
                                    ,'" + ticket.employeeCell + @"'
                                    ,'" + ticket.employeeStartDate + @"'
                                    ,'" + ticket.employeeEndDate + @"'
                                    ,'" + ticket.employeeAddress + @"'
                                    ,'" + ticket.employeeAbsenceType + @"'
                                    ,'" + ticket.employeeManager + @"'
                                    ,'" + ticket.employeeID + @"'
                                    ,'" + ticket.employeeApproval + @"'
                                    )";
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
        public JsonResult Put(Ticket ticket)
        {
            string query = @"
                    UPDATE Ticket SET 
                    employeeName = '" + ticket.employeeName + @"'
                    ,employeeMail = '" + ticket.employeeEmail + @"'
                    ,employeeCell = '" + ticket.employeeCell + @"'
                    ,employeeStart = '" + ticket.employeeStartDate + @"'
                    ,employeeEnd = '" + ticket.employeeEndDate + @"'
                    ,employeeAddress = '" + ticket.employeeAddress + @"'
                    ,employeeAbsenceType = '" + ticket.employeeAbsenceType + @"'
                    ,employeeManager = '" + ticket.employeeManager + @"'
                    ,employeeID = '" + ticket.employeeID + @"'
                    ,employeeApproval = '" + ticket.employeeApproval + @"'
                    where TicketID = " + ticket.TicketID + @" 
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

        [HttpDelete("{TicketID}")]
        public JsonResult Delete(int TicketID)
        {
            string query = @"
                    DELETE FROM Ticket
                    WHERE TicketID = " + TicketID + @" 
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

        [Route("GetAllTickets")]
        [HttpGet]
        public JsonResult GetAllTickets()
        {
            string query = @"select * from dbo.Ticket";
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
