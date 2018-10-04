using RecipeStoreViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeStore.Services.Message
{
    public class DeleteRecipeRequest
    {
        public Guid recipeId { get; set; }
    }
}
