using RecipeStore.Domain.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeStore.Entity
{
    public class ShoppingList : BaseModel<Guid>
    {
        public string CartRefCookie { get; set; }
        public virtual IEnumerable<ShoppingListItem> ShoppingCartItems { get; set; }

        public override bool validate()
        {
            return true;
        }
    }
}
