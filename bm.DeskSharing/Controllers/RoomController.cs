using bm.DeskSharing.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Specialized;
using bm.DeskSharing.Implementation;
using System.Text.Encodings.Web;
using System.Text.Json;

namespace bm.DeskSharing.Controllers
{
    public class RoomController : Controller
    {
        private BmDeskSharingDBContext _dbContext;
        private RoomDBService roomDBService;

        public RoomController(BmDeskSharingDBContext dbContext)
        {
            _dbContext = dbContext;
            roomDBService = new RoomDBService(_dbContext);
        }

        private Room room;
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CreateRoomForm() {
            return View();
        }

        public IActionResult ViewRoomList()
        {
            return View();
        }

        public IActionResult ViewRoomDetails(int id)
        {
            Console.WriteLine("RID received : " + id);
            Room r = roomDBService.getRoom(id);
            return View(r);
        }

        public IActionResult GetRoomsList() {
            var roomsList = roomDBService.getRoomList();
            var jsonRoomList=Json(new { data = roomsList });
            return jsonRoomList;
        }

        [HttpPost]
        public String SaveRoom(String RCode,String RName, String RDesc,int fkFID, String sUser, String djson)
        {
            room= new Room();
            room.RCode= RCode;
            room.RName= RName;
            room.RDesc= RDesc;
            room.fkFID= fkFID;
            room.tsCreated= DateTime.Now;
            room.tsModify= DateTime.Now;
            room.sUser= sUser;
            room.isActive= true;
            room.DiagramJson= djson;
            roomDBService.saveRoom(room);
            return "success";
        }
    }
}
