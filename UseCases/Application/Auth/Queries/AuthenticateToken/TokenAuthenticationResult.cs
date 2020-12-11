using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Auth.Queries.AuthenticateToken
{
    public class TokenAuthenticationResult
    {
        public bool IsValid { get; set; }
        public string Username { get; set; }
    }
}
