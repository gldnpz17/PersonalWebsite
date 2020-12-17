#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["PersonalWebsite/PersonalWebsite.csproj", "PersonalWebsite/"]
COPY ["UseCases/Application/Application.csproj", "UseCases/Application/"]
COPY ["Infrastructure/Persistence/InMemoryEFCore/InMemoryEFCore.csproj", "Infrastructure/Persistence/InMemoryEFCore/"]
COPY ["Infrastructure/Persistence/EFCorePostgres/EFCorePostgres.csproj", "Infrastructure/Persistence/EFCorePostgres/"]
COPY ["Entities/DomainModel/DomainModel.csproj", "Entities/DomainModel/"]
COPY ["Infrastructure/Services/SimpleDomainServiceImplementation/SimpleDomainServiceImplementation.csproj", "Infrastructure/Services/SimpleDomainServiceImplementation/"]
RUN dotnet restore "PersonalWebsite/PersonalWebsite.csproj"
COPY . .
WORKDIR "/src/PersonalWebsite"
RUN dotnet build "PersonalWebsite.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PersonalWebsite.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PersonalWebsite.dll"]