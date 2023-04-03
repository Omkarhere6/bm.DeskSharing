using Microsoft.AspNetCore.Mvc;

namespace bm.DeskSharing.Controllers
{
    public class RoomController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CreateRoomForm() {
            return View();
        }
    }
}
