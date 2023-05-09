using bm.DeskSharing.Interfaces;
using bm.DeskSharing.Models;
using Microsoft.EntityFrameworkCore;

namespace bm.DeskSharing.Implementation
{

    public class FloorDBService : IFloorDBServices
    {
        private readonly BmDeskSharingDBContext _dbContext;

        public FloorDBService(BmDeskSharingDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        public bool saveFloor(Floor floor)
        {
            throw new NotImplementedException();
        }

        public bool deleteFloor(int fid)
        {
            throw new NotImplementedException();
        }

        public bool updateFloor(Floor floor)
        {
            throw new NotImplementedException();
        }

        public List<Floor> getFloorList()
        {
            var floorList = _dbContext.Floors.ToList();
            return floorList;
        }

        public List<long> getFloorIDListForBID(int bid)
        {
            var fids= _dbContext.Floors.Where(f => f.fkBID == bid).Select(r => r.FID).ToList();
            return fids;
        }
    }
}
