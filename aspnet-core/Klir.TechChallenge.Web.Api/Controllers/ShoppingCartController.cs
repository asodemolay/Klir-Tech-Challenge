using Klir.TechChallenge.Domain.Product.Entity;
using Klir.TechChallenge.Domain.Product.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private readonly IShoppingCartRepository _repository;
        private readonly IProductRepository _productRepository;

        public ShoppingCartController(IShoppingCartRepository repository, IProductRepository productRepository)
        {
            _repository = repository;
            _productRepository = productRepository;
        }

        [HttpGet]
        public ShoppingCart Get()
        {
            return _repository.GetShoppingCart();
        }

        [HttpPost("{productId}/setquantity/{quantity}")]
        [ProducesResponseType(typeof(ShoppingCart), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public IActionResult AddItem(int productId, short quantity)
        {
            if (productId < 0) return BadRequest("Invalid Product Id");
            if (quantity < 0) return BadRequest("Invalid Quantity");

            var product = _productRepository.GetProductById(productId);

            if (product == null) return BadRequest($"There's no Product with Id {productId}");

            if (_repository.GetShoppingCart().ShoppingCartItems.Any(p => p.Product.Id == productId) == false)
            {
                return Ok(_repository.AddItem(product, quantity));
            }
            return Ok(_repository.ChangeItemQuantity(product, quantity));
        }

        [HttpDelete("{productId}")]
        [ProducesResponseType(typeof(ShoppingCart), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public IActionResult RemoveItem(int productId)
        {
            if (productId < 0) return BadRequest("Invalid Product Id");

            var product = _productRepository.GetProductById(productId);

            if (product == null) return BadRequest($"There's no Product with Id {productId}");

            if (_repository.GetShoppingCart().ShoppingCartItems.Any(p => p.Product.Id == productId) == false) return Ok(_repository.GetShoppingCart());

            return Ok(_repository.RemoveItem(product));
        }
    }
}
