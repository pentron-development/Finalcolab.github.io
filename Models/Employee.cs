using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading.Tasks;

namespace newpent.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string? EmployeeName { get; set; }
        public string? Department { get; set; }

        public string? DateOfJoining { get; set; }
        public string? PhotoFileName { get; set; }
    }
}
