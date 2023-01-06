using Gh.Ngmug.Datalayer.BusinessObjects.Persistent.data;
using Gh.Ngmug.Datalayer.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Gh.Ngmug.WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController : ControllerBase
{

    private readonly NgmugDbContext db;

    public TestController(NgmugDbContext ngmugDbContext)
    {
        this.db = ngmugDbContext;
    }

    [HttpGet(Name = "TestGet")]
    public IEnumerable<TestEntity> TestGet()
    {
        var temp = db.Set<TestEntity>().ToList();
        return temp;
    }

    [HttpPost(Name = "TestPost")]
    public async Task TestPost(TestEntity entity)
    {
        var temp = db.Set<TestEntity>().Add(entity);
        await db.SaveChangesAsync();
    }

    [HttpDelete(Name = "TestDelete")]
    public async Task TestDelete(TestEntity entity)
    {
        var temp = db.Set<TestEntity>().Remove(entity);
        await db.SaveChangesAsync();
    }
}

