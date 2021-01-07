namespace PersonalWebsite.Common.DTOs.Auth
{
    public class ResetPasswordRequestDto
    {
        public string PasswordResetToken { get; set; }
        public string NewPassword { get; set; }
    }
}
