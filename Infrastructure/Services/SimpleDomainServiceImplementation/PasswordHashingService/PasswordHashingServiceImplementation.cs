﻿using DomainModel.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SimpleDomainServiceImplementation.PasswordHashingService
{
    public class PasswordHashingServiceImplementation : IPasswordHashingService
    {
        public string HashPassword(string password, string salt)
        {
            var hashedPassword = new Rfc2898DeriveBytes(
                Encoding.UTF8.GetBytes(password),
                Convert.FromBase64String(salt),
                1024);

            return Convert.ToBase64String(hashedPassword.GetBytes(256));
        }
    }
}
