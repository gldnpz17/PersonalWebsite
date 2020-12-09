using DomainModel.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.ValueObjects
{
    public class PasswordCredential : ValueObject
    {
        public string HashedPassword { get; set; }
        public string Salt { get; set; }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return HashedPassword;
            yield return Salt;
        }
    }
}
