using DomainModel.Enums;
using DomainModel.ValueObjects;
using System.Collections.Generic;

namespace DomainModel.Services
{
    public interface IPasswordResetMessageSender
    {
        void SendPasswordResetMessage(Dictionary<TypesOfAdress, string> addresses, PasswordResetToken token);
    }
}
