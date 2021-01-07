using DomainModel.Services;
using System;

namespace SimpleDomainServiceImplementation.DateTimeService
{
    public class DateTimeServiceImplementation : IDateTimeService
    {
        public DateTime GetCurrentDateTime()
        {
            return DateTime.Now;
        }
    }
}
