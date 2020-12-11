using DomainModel.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SimpleDomainServiceImplementation.SecureRng
{
    public class SecureRngImplementation : ISecureRng
    {
        public string GenerateSecureRandomString(int length)
        {
            var cryptoRng = new RNGCryptoServiceProvider();

            var randomBytes = new byte[length * 6 / 8];

            cryptoRng.GetBytes(randomBytes);

            return Convert.ToBase64String(randomBytes);
        }
    }
}
