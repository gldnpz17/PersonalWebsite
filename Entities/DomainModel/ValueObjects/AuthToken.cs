using System;

namespace DomainModel.ValueObjects
{
    public class AuthToken
    {
        public virtual string Token { get; set; }
        public virtual DateTime CreatedAt { get; set; }
    }
}
