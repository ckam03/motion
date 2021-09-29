using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MotionAPI.Models
{
    public class Unsplash
    {
        public List<string> ImageUrlSmall { get; set; }
        public List<string> Authors { get; set; }
        public List<string> Locations { get; set; }
    }
}