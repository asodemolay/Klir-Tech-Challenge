using Klir.TechChallenge.Domain.Product.Entity;
using Klir.TechChallenge.Domain.Product.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;

namespace Klir.TechChallenge.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repository;

        public ProductController(IProductRepository repository) => _repository = repository;

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _repository.GetProducts();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Product), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public IActionResult Get(int id)
        {
            var product = _repository.GetProductById(id);
            if (product == null) return NoContent();
            return Ok(product);
        }

        [HttpGet("name={name}")]
        [ProducesResponseType(typeof(IEnumerable<Product>), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public IActionResult Get(string name)
        {
            if (string.IsNullOrWhiteSpace(name)) return BadRequest("Parameter 'name' cannot be empty");

            var products = _repository.GetProductByName(name);
            if (products == null) return null;
            return Ok(products);
        }

        [HttpPost("{id}/AddPromotion")]
        [ProducesResponseType(typeof(Product), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public IActionResult AddPromotion(int id, Domain.Product.Enum.PromotionType promotionType)
        {
            if (id < 1) return BadRequest("Invalid Id");

            switch (promotionType)
            {
                case Domain.Product.Enum.PromotionType.Buy1Get1:
                    _repository.AddPromotionToProduct(id, new Domain.Product.Entity.Promotions.Buy1Get1Free());
                    break;
                case Domain.Product.Enum.PromotionType.Get3For10Euros:
                    _repository.AddPromotionToProduct(id, new Domain.Product.Entity.Promotions.Get3For10Euros());
                    break;
                default:
                    return BadRequest($"Promotion Type {promotionType} does not exists.");
            }

            return Ok(_repository.GetProductById(id));
        }

        [HttpDelete("{id}/RemovePromotion")]
        [ProducesResponseType(typeof(Product), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public IActionResult RemovePromotion(int id)
        {
            if (id < 1) return BadRequest("Invalid Id");
            return Ok(_repository.RemoveProductPromotion(id));
        }
    }
}
