using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using motionapi.Services;

namespace MotionAPI.Controllers
{
    [ApiController]
    [Route("unsplash")]
    public class UnsplashController
    {
        private string url = "https://api.unsplash.com/photos/random?client_id=7IBxOyOlLcwZpIHINU0PqwaWgaEJWob0yv6iDBc7hDo&count=20&collections=327760";
        private readonly IHttpClientFactory _clientFactory;
        public UnsplashController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet]
        public async Task GetUnsplashData()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, url);
            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);
            
        }
    }
}