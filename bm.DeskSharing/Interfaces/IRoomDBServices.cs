using bm.DeskSharing.Models;

namespace bm.DeskSharing.Interfaces
{
    public interface IRoomDBServices
    {
        bool saveRoom(Room room);
        bool deleteRoom(int rid);
        bool updateRoom(Room room);
        List<Room> getRoomList();
    }
}
