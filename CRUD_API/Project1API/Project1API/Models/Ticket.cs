using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Project1API.Models
{
    public class Ticket
    {
        public int TicketID { get; set; }
        public string employeeName { get; set; }
        public string employeeEmail{ get; set; }
        public string employeePassword { get; set; }
        public string employeeCell { get; set; }
        public string employeeStartDate { get; set; }
        public string employeeEndDate { get; set; }
        public string employeeAddress { get; set; }
        public string employeeAbsenceType { get; set; }
        public string employeeManager { get; set; }
        public string employeeApproval { get; set; }
        public string employeeID { get; set; }

    }
}
