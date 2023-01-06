using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Gh.Ngmug.WebApp.Data;

public class BaseContext : DbContext
{
    protected BaseContext()
    {
    }

    public BaseContext(DbContextOptions options) : base(options)
    {
    }
}