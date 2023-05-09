using bm.DeskSharing.Interfaces;
using bm.DeskSharing.Models;
using Microsoft.EntityFrameworkCore;

namespace bm.DeskSharing.Implementation
{

    public class BuildingDBService : IBuildingDBServices
    {
        private readonly BmDeskSharingDBContext _dbContext;

        public BuildingDBService(BmDeskSharingDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        public bool saveBuilding(Building building)
        {
            throw new NotImplementedException();
        }

        public bool deleteBuilding(int bid)
        {
            throw new NotImplementedException();
        }

        public bool updateBuilding(Building building)
        {
            throw new NotImplementedException();
        }

        public List<Building> getBuildingList()
        {
            var buildingList = _dbContext.Buildings.ToList();
            return buildingList;
        }

        public List<long> getBuildingIDList()
        {
            var bids= _dbContext.Buildings.Select(r => r.BID).ToList();
            return bids;
        }
    }
}
