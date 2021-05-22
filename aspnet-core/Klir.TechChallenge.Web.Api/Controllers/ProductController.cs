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
        public IActionResult Get(int id)
        {
            var product = _repository.GetProductById(id);
            if (product == null) return NoContent();
            return Ok(product);
        }

        [HttpGet("name={name}")]
        [ProducesResponseType(typeof(IEnumerable<Product>), (int)HttpStatusCode.OK)]
        public IActionResult Get(string name)
        {
            if (string.IsNullOrWhiteSpace(name)) return BadRequest("Parameter 'name' cannot be empty");

            var products = _repository.GetProductByName(name);
            if (products == null) return null;
            return Ok(products);
        }
    }
}
