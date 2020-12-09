using DomainModel.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.Entities
{
    public class Account
    {
        public string Username { get; set; }
        public PasswordCredential PasswordCredential { get; set; }
        public string EmailAddress { get; set; }
        public List<AccountPrivilege> Privileges { get; set; }
        public List<AuthToken> AuthTokens { get; set; }
    }
}
