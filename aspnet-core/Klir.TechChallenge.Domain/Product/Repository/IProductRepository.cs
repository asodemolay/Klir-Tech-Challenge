using System.Collections.Generic;

namespace Klir.TechChallenge.Domain.Product.Repository
{
    public interface IProductRepository
    {
        IEnumerable<Entity.Product> GetProducts();

        Entity.Product GetProductById(int id);

        IEnumerable<Entity.Product> GetProductByName(string name);
    }
}
