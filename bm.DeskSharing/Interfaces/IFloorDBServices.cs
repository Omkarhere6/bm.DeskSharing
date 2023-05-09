using bm.DeskSharing.Models;

namespace bm.DeskSharing.Interfaces
{
    public interface IFloorDBServices
    {
        bool saveFloor(Floor floor);
        bool deleteFloor(int fid);
        bool updateFloor(Floor floor);
        List<Floor> getFloorList();
        List<long> getFloorIDListForBID(int bid);
    }
}
