using Microsoft.AspNetCore.Mvc;

namespace MainApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "Hello Felipe";
        }
    }
}