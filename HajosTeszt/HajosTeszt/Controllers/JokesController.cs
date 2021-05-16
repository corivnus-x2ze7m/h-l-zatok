using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/jokes")]
    [ApiController]
    public class JokesController : ControllerBase
    {
        // GET: api/<JokesController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
           // FunnyDatabaseContext context = new FunnyDatabaseContext;
            return new string[] { "value1", "value2" };
        }

        // GET api/<JokesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            /*FunnyDatabaseContext context = new FunnyDatabaseContext();
            var keresettVicc = (from x in context.Jokes
                                where x.JokeSk == id
                                select x).FirstOrDefault();
            return keresettVicc;*/
            return "value1";
        }

        // POST api/jokes
        [HttpPost]
        /*public void Post([FromBody] Joke újVicc)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            context.Jokes.Add(újVicc);
            context.SaveChanges();
        }*/

        // PUT api/<JokesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/jokes/5
        [HttpDelete("{id}")]
        /*public void Delete(int id)
        {
            FunnyDatabaseContext context = new FunnyDatabaseContext();
            var törlendőVicc = (from x in context.Jokes
                                where x.JokeSk == id
                                select x).FirstOrDefault();
            context.Remove(törlendőVicc);
            context.SaveChanges();
        }*/
    }
}
