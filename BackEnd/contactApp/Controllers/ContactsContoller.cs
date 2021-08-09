using System.Linq;
using contactApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace contactApp.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public ContactsController(ApplicationDbContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IActionResult GetAllContacts()
        {
            return Ok(this.context.People.ToList());
        }
        [HttpGet("{id?}")]
        public IActionResult GetContact(int? ID)
        {
            if (ID == null)
            {
                return BadRequest("The ID is not specified");
            }
            var person = this.context.People.Find(ID);
            if (person == null)
            {
                return NotFound("The person is not found");
            }
            return Ok(person);
        }
        [HttpPost]
        public IActionResult CreatePerson([Bind("Name", "BloodGroup", "Address", "Email", "Phone")] Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("The Data is not valid");
            }
            this.context.Add(person);
            this.context.SaveChanges();
            return Created("", person);
        }
        [HttpPut]
        public IActionResult ChangePersonData(Person person){
            if(!ModelState.IsValid){
                return BadRequest("The Data is not valid");
            }
            this.context.Entry(person).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            this.context.SaveChanges();
            return NoContent();
        }
        [HttpDelete("{id?}")]
        public IActionResult DeletePersonData(int? id){
            if(id == null){
                return BadRequest("The ID is not Specified");
            }
           var person = this.context.People.Find(id);
           if(person == null){
               return NotFound("The Person is not found");
           }
           this.context.People.Remove(person);
           this.context.SaveChanges();
           return Ok(person);

        }

    }
}