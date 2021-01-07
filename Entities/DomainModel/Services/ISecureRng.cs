namespace DomainModel.Services
{
    public interface ISecureRng
    {
        string GenerateSecureRandomString(int length);
    }
}
