using DomainModel.Enums;
using DomainModel.Services;
using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace SimpleDomainServiceImplementation.PasswordResetMessageSenderImplementation
{
    public class PasswordResetMessageSenderImplementation : IPasswordResetMessageSender
    {
        public void SendPasswordResetMessage(Dictionary<TypesOfAdress, string> addresses, PasswordResetToken token)
        {
            foreach (var address in addresses)
            {
                if (address.Key == TypesOfAdress.Email)
                {
                    Debug.WriteLine($"reset email sent to {address.Value}");
                }
            }
        }
    }
}
