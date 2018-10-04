using RecipeStoreViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeStore.Services.Message
{
    public class UpdateIngredientResponse
    {
        public IngredientViewModel ingredient { get; internal set; }
    }
}
