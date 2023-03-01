using Final_Server.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Final_Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<Employee> Get() //get all users
        {
            //Department department = new Department();
            return Employee.ReadEmployees();

        }


        // GET api/<EmployeeController>/5
        [HttpGet("/UserEmail/Userpassword")]
        public IActionResult GetUserLoginDetails(string UserEmail, string Userpassword) //catch all details of the logged in user 
        {

            Employee employee = new Employee();
            employee = employee.Read(UserEmail, Userpassword);

            if (employee != null)
            {
                return Ok(employee);
            }
            else
            {
                return NotFound("Email or password was not found");
            }
        }



        [HttpPut("{userEmail}/{isActive}")]
        public IActionResult PutActive(string userEmail, bool isActive) //Change by check box Is_Active feild in the logged in user
        {
            Employee employee = new Employee();
            int numEffected = employee.UpdateActive(userEmail, isActive);
            if (numEffected != 0)
            {
                return Ok("user succesfully updated");
            }
            else
            {
                return NotFound("We couldnt update your user");
            }
        }



        // POST api/<EmployeeController>
        [HttpPost]
        public IActionResult Post([FromBody] Employee employee) //Insert new user
        {
            int numEffected = employee.InsertEmployee();
            if (numEffected != 0)
            {
                return Ok("Employee succesfully inserted");
            }
            else
            {
                return NotFound("Error in insert this employee");
            }
        }



        // PUT api/<EmployeeController>/5
        [HttpPut]
        public IActionResult PutUserDetails([FromBody] string userEmail, string userFName, string userLName, string userGender) //Update user details
        {
            Employee employee = new Employee();
            int numEffected = employee.UpdateUserDetails(userEmail, userFName, userLName, userGender);
            if (numEffected != 0)
            {
                return Ok("user succesfully updated");
            }
            else
            {
                return NotFound("We couldnt update your user");
            }
        }



        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }



    }
}
