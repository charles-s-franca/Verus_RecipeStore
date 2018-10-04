using RecipeStoreViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RecipeStore.Services.Message
{
    public class DeleteIngredientRequest
    {
        public Guid ingredientId { get; set; }
    }
}
