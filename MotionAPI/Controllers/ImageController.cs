using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using motionapi.Models;

namespace motionapi.Controllers
{
    [ApiController]
    [Route("image")]
    public class ImageController : ControllerBase
    {
        private ApplicationDbContext db;
        public ImageController(ApplicationDbContext db) 
        {
            this.db = db;
        }

        [HttpGet]
        public IEnumerable<Image> GetImages() 
        {
            return db.Images.ToList();
        }


    }
}