using RecipeStore.Entity;
using RecipeStoreViewModel;
using System.Collections.Generic;
using System.Linq;

namespace RecipeStore.Services.Mapping
{
    public static class ShoppingCartItemMap
    {
        public static ShoppingCartItemViewModel ToShoppingCartItemViewModel(this ShoppingListItem entity)
        {
            return AutoMapper.Mapper.Map<ShoppingListItem, ShoppingCartItemViewModel>(entity);
        }

        public static IEnumerable<ShoppingCartItemViewModel> ToShoppingCartItemViewModel(this IEnumerable<ShoppingListItem> entity)
        {
            return AutoMapper.Mapper.Map<IEnumerable<ShoppingListItem>, IEnumerable<ShoppingCartItemViewModel>>(entity.ToList());
        }
    }
}
