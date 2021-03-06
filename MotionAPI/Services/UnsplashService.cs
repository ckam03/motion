using System.Net.Http;
using System.Threading.Tasks;

namespace motionapi.Services
{
    public class UnsplashService 
    {
        private readonly IHttpClientFactory _clientFactory;
        private string url = "https://api.unsplash.com/photos/random?client_id=7IBxOyOlLcwZpIHINU0PqwaWgaEJWob0yv6iDBc7hDo&count=20&collections=327760";

        public UnsplashService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task GetUnsplashImagesAsync()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, url);
            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);

        }


    }
}