using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace RecipeStore.Services.Message
{
    public class GetShoppingCartsRequest
    {
        public Expression<Func<Entity.ShoppingList, bool>> filter { get; set; }
        public Func<IQueryable<Entity.ShoppingList>, IOrderedQueryable<Entity.ShoppingList>> orderBy { get; set; }
    }
}
