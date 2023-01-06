using System;
using Gh.Ngmug.Datalayer.BusinessObjects.Persistent.data;
using Gh.Ngmug.WebApp.Data;
using Microsoft.EntityFrameworkCore;

namespace Gh.Ngmug.Datalayer.Contexts
{
	public class NgmugDbContext : BaseContext
	{
		public NgmugDbContext()
		{
		}

        public NgmugDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TestEntity>();
        }
    }
}

