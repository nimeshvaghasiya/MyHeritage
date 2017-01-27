using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyHeritage.Data.Abstract;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MyHeritage.API.Controllers
{
    [Route("api/[controller]")]
    public class TreeController : Controller
    {
        private ITreeMemberHeritageRepository _treeMemberHeritageRepository;

        public TreeController(ITreeMemberHeritageRepository treeMemberHeritageRepository)
        {
            _treeMemberHeritageRepository = treeMemberHeritageRepository;
        }


        [HttpGet("GetAll/{id}")]
        public IActionResult GetAll(int id = 1)
        {
            var result = _treeMemberHeritageRepository.FindBy(t => t.LinkToMemberMasterId == id);
            return new OkObjectResult(result);
        }
    }
}
