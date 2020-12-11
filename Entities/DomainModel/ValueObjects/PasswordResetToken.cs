using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.ValueObjects
{
    public class PasswordResetToken
    {
        public string Token { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
