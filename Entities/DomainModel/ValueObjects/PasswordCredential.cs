using DomainModel.Common;
using System.Collections.Generic;

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
