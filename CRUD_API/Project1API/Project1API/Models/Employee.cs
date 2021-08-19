using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1API.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string StaffNumber { get; set; }
        public string NextOfKinID { get; set; }
        public string DesignationID { get; set; }
        public string RoleID { get; set; }
        public string Title { get; set; }
        public string LeaveDaysAvailable { get; set; }
        public string Email { get; set; }
        public string EmailConfirmed { get; set; }
        public string PasswordHash { get; set; }
        public string SecurityStamp { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneNumberConfirmed { get; set; }
        public string TwoFactorEnabled { get; set; }
        public string LockoutEndDateUtc { get; set; }
        public string LockoutEnabled { get; set; }
        public string AccessFailedCount { get; set; }
        public string UserName { get; set; }
        public string DateOfBirth { get; set; }
    }
}
