using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonalWebsite.Common.DTOs.Auth
{
    public class ResetPasswordRequestDto
    {
        public string PasswordResetToken { get; set; }
        public string NewPassword { get; set; }
    }
}
