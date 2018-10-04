using RecipeStoreViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeStore.Services.Message
{
    public class UpdateRecipeRequest
    {
        public RecipeViewModel model { get; set; }
    }
}
