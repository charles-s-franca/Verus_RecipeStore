using RecipeStoreViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeStore.Services.Message
{
    public class UpdateRecipeResponse
    {
        public RecipeViewModel recipe { get; internal set; }
    }
}
