using Klir.TechChallenge.Web.Api.Domain.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Web.Api.Domain.Product.Repository
{
    public interface IProductRepository
    {
        IEnumerable<Entity.Product> GetProducts();

        Entity.Product GetProduct(int id);
    }
}
