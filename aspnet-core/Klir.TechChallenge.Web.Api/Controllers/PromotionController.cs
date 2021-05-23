using Klir.TechChallenge.Domain.Product.Entity.Promotions;
using Klir.TechChallenge.Domain.Product.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromotionController : ControllerBase
    {
        private readonly IPromotionRepository _repository;

        public PromotionController(IPromotionRepository repository) => _repository = repository;

        [HttpGet]
        public IEnumerable<IPromotion> Get()
        {
            return _repository.GetAllPromotions();
        }
    }
}
