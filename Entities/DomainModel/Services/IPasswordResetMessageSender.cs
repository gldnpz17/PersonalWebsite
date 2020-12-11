using DomainModel.Enums;
using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Services
{
    public interface IPasswordResetMessageSender
    {
        void SendPasswordResetMessage(Dictionary<TypesOfAdress, string> addresses, PasswordResetToken token);
    }
}
