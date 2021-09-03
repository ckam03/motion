using System.Net.Http;

namespace motionapi.Services
{
    public class UnsplashService : IUnsplashService
    {
        private readonly IHttpClientFactory _clientFactory;

        public UnsplashService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        
    }
}