using RecipeStore.Services.Message;

namespace RecipeStore.Services.Interfaces
{
    public interface IRecipeService
    {
        GetReciepesResponse GetRecipes(GetRecipesRequest request);
        AddRecipeResponse AddRecipes(AddRecipeRequest request);
        UpdateRecipeResponse UpdateRecipes(UpdateRecipeRequest request);
        DeleteRecipeResponse DeleteRecipes(DeleteRecipeRequest request);
    }
}
