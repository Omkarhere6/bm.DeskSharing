using bm.DeskSharing.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Specialized;
using bm.DeskSharing.Implementation;
namespace bm.DeskSharing.Controllers
{
    public class FloorController : Controller
    {
        private BmDeskSharingDBContext _dbContext;
        private FloorDBService floorDBService;
        public FloorController(BmDeskSharingDBContext dbContext)
        {
            _dbContext = dbContext;
            floorDBService = new FloorDBService(_dbContext);
        }

        private Building building;
        public IActionResult Index()
        {
            return View();
        }

        public List<long> getFids(int bid)
        {
            //Console.WriteLine(bid);
            var fidlist = floorDBService.getFloorIDListForBID(bid);
            return fidlist;
        }
    }
}
