using RecipeStore.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeStore.Repository.EntityFramework.Implementation
{
    public class RecipeItemRepository : BaseRepository<RecipeItem, Guid>, IRecipeItemRepository
    {
        public RecipeItemRepository(IUnitOfWork unit) : base(unit)
        {

        }
    }
}
