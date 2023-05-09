using bm.DeskSharing.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Specialized;
using bm.DeskSharing.Implementation;
namespace bm.DeskSharing.Controllers
{
    public class BuildingController : Controller
    {
        private BmDeskSharingDBContext _dbContext;
        private BuildingDBService buildingDBService;
        public BuildingController(BmDeskSharingDBContext dbContext)
        {
            _dbContext = dbContext;
            buildingDBService = new BuildingDBService(_dbContext);
        }

        private Building building;
        public IActionResult Index()
        {
            return View();
        }


        public List<long> getBids()
        {
            var bidlist = buildingDBService.getBuildingIDList();
            return bidlist;
        }

    }
}
