using RecipeStore.Services.Message;

namespace RecipeStore.Services.Interfaces
{
    public interface IShoppingListService
    {
        GetShoppingCartsResponse GetShoppingCart(GetShoppingCartsRequest request);
        AddShoppingCartResponse AddShoppingCarts(AddShoppingCartRequest request);
        GetShoppingCartSugestionResponse GetShoppingCartSugestion(GetShoppingCartSugestionRequest request);
    }
}
