using bm.DeskSharing.Models;

namespace bm.DeskSharing.Interfaces
{
    public interface IBuildingDBServices
    {
        bool saveBuilding(Building building);
        bool deleteBuilding(int bid);
        bool updateBuilding(Building building);
        List<Building> getBuildingList();
        List<long> getBuildingIDList();
    }
}
