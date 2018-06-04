using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace Stuff.Hubs
{
    public class StuffHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}