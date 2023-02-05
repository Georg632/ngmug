#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Gh.Ngmug.WebApi/Gh.Ngmug.WebApi.csproj", "Gh.Ngmug.WebApi/"]
COPY ["Gh.Ngmug.Datalayer/Gh.Ngmug.Datalayer.csproj", "Gh.Ngmug.Datalayer/"]
RUN dotnet restore "Gh.Ngmug.WebApi/Gh.Ngmug.WebApi.csproj"
COPY . .
WORKDIR "/src/Gh.Ngmug.WebApi"
RUN dotnet build "Gh.Ngmug.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Gh.Ngmug.WebApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Gh.Ngmug.WebApi.dll"]
