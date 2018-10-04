using Microsoft.AspNetCore.Mvc;
using RecipeStore.Domain;
using RecipeStore.Services.Interfaces;
using RecipeStoreViewModel;
using System;
using System.Collections.Generic;
using System.Net;

namespace RecipeStore.Controllers
{
    [Produces("application/json")]
    [Route("api/ingredient")]
    public class IngredientController : Controller
    {
        IIngredientService _ingredientService;

        public IngredientController(
            IIngredientService ingredientService
        )
        {
            _ingredientService = ingredientService;
        }

        [HttpGet("")]
        public ApiResponse<IEnumerable<IngredientViewModel>> GetIngredients()
        {
            try
            {
                return ApiResponse<IEnumerable<IngredientViewModel>>.CreateResponse(true, "", _ingredientService.GetIngredients(new Services.Message.GetIngredientsRequest()).list);
            }
            catch (BusinessRuleException ex)
            {
                return ApiResponse<IEnumerable<IngredientViewModel>>.CreateResponse(false, ex.Message, null, rules: ex.brokenRules, code: HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                Console.Write(ex);
                return ApiResponse<IEnumerable<IngredientViewModel>>.CreateResponse(false, "An unexpected error occured.", null, code: HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost("")]
        public ApiResponse<IngredientViewModel> AddIngredient([FromBody] NewIngredientViewModel model)
        {
            try
            {
                return ApiResponse<IngredientViewModel>.CreateResponse(true, "", _ingredientService.AddIngredients(new Services.Message.AddIngredientRequest() { model = model }).ingredient);
            }
            catch (BusinessRuleException ex)
            {
                return ApiResponse<IngredientViewModel>.CreateResponse(false, ex.Message, null, rules: ex.brokenRules, code: HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                Console.Write(ex);
                return ApiResponse<IngredientViewModel>.CreateResponse(false, "An unexpected error occured.", null, code: HttpStatusCode.InternalServerError);
            }
        }

        [HttpPut("")]
        public ApiResponse<IngredientViewModel> UpdateIngredient([FromBody] IngredientViewModel model)
        {
            try
            {
                return ApiResponse<IngredientViewModel>.CreateResponse(true, "", _ingredientService.UpdateIngredient(new Services.Message.UpdateIngredientRequest() { model = model }).ingredient);
            }
            catch (BusinessRuleException ex)
            {
                return ApiResponse<IngredientViewModel>.CreateResponse(false, ex.Message, null, rules: ex.brokenRules, code: HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                Console.Write(ex);
                return ApiResponse<IngredientViewModel>.CreateResponse(false, "An unexpected error occured.", null, code: HttpStatusCode.InternalServerError);
            }
        }

        [HttpDelete("{id}")]
        public ApiResponse<bool> DeleteIngredient(Guid id)
        {
            try
            {
                return ApiResponse<bool>.CreateResponse(true, "", _ingredientService.DeleteIngredient(new Services.Message.DeleteIngredientRequest() { ingredientId = id }).status);
            }
            catch (BusinessRuleException ex)
            {
                return ApiResponse<bool>.CreateResponse(false, ex.Message, false, rules: ex.brokenRules, code: HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                Console.Write(ex);
                return ApiResponse<bool>.CreateResponse(false, "An unexpected error occured.", false, code: HttpStatusCode.InternalServerError);
            }
        }
    }
}