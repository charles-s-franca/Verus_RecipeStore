using Microsoft.EntityFrameworkCore;
using RecipeStore.Entity;
using RecipeStore.Helpers;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeStore.Repository.EntityFramework
{
    public class AppContext : DbContext, IAppContext
    {
        public AppContext()
            : base()
        { }

        public DbSet<Recipe> Recipe { get; set; }
        public DbSet<Ingredient> Ingredient { get; set; }
        public DbSet<ShoppingList> ShoppingList { get; set; }
        public DbSet<ShoppingListItem> ShoppingListItem { get; set; }
        public DbSet<RecipeItem> RecipeItem { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(AppConfiguration.GetConnectionString());
        }
    }
}
