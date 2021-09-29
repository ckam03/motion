using System.Threading.Tasks;

namespace motionapi.Services
{
    public interface IUnsplashService
    {
        Task GetUnsplashImagesAsync();
    }
}