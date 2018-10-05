using RecipeStore.Entity;
using RecipeStoreViewModel;
using System.Collections.Generic;
using System.Linq;

namespace RecipeStore.Services.Mapping
{
    public static class ShoppingCartMap
    {
        public static ShoppingCartViewModel ToShoppingCartViewModel(this ShoppingList entity)
        {
            return AutoMapper.Mapper.Map<ShoppingList, ShoppingCartViewModel>(entity);
        }

        public static IEnumerable<ShoppingCartViewModel> ToShoppingCartViewModel(this IEnumerable<ShoppingList> entity)
        {
            return AutoMapper.Mapper.Map<IEnumerable<ShoppingList>, IEnumerable<ShoppingCartViewModel>>(entity.ToList());
        }
    }
}
