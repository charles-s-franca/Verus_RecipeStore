using RecipeStoreViewModel;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace RecipeStore.Services.Message
{
    public class AddShoppingCartRequest
    {
        public Expression<Func<Entity.Recipe, bool>> filter { get; set; }
        public NewShoppingCartViewModel model { get; set; }
    }
}
