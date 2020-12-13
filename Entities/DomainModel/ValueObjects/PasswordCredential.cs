using DomainModel.Common;
using DomainModel.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel.ValueObjects
{
    public class PasswordCredential : ValueObject
    {
        public virtual string HashedPassword { get; set; }
        public virtual string Salt { get; set; }

        protected override IEnumerable<object> GetAtomicValues()
        {
            yield return HashedPassword;
            yield return Salt;
        }
    }
}
