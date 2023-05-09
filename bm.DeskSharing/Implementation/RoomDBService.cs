using bm.DeskSharing.Interfaces;
using bm.DeskSharing.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace bm.DeskSharing.Implementation
{

    public class RoomDBService : IRoomDBServices
    {
        private readonly BmDeskSharingDBContext _dbContext;

        public RoomDBService(BmDeskSharingDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        public void saveRoom(Room room)
        {
            Console.WriteLine("--- Data Submitted ---");
            Console.WriteLine(room.RCode);
            Console.WriteLine(room.RName);
            Console.WriteLine(room.RDesc);
            Console.WriteLine(room.fkFID);
            Console.WriteLine(room.sUser);

            _dbContext.Rooms.Add(room);
            _dbContext.SaveChanges();
            
        }

        public List<Room> getRoomList()
        {
            var roomList = _dbContext.Rooms.ToList();
            return roomList;
        }

        public Room getRoom(long id)
        {
            var room = _dbContext.Rooms.Where(r => r.RID == id).FirstOrDefault();
            return room;
        }

        bool IRoomDBServices.saveRoom(Room room)
        {
            throw new NotImplementedException();
        }

        bool IRoomDBServices.deleteRoom(int rid)
        {
            throw new NotImplementedException();
        }

        bool IRoomDBServices.updateRoom(Room room)
        {
            throw new NotImplementedException();
        }
    }
}
