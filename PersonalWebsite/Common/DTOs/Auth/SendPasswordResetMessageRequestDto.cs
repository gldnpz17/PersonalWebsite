using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalWebsite.Common.DTOs.Auth
{
    public class SendPasswordResetMessageRequestDto
    {
        public string EmailAddress { get; set; }
    }
}
