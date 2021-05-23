using Klir.TechChallenge.Domain.Product.Entity;
using System.Collections.Generic;

namespace Klir.TechChallenge.Infra.Data.Load
{
    public interface IContext
    {
        IEnumerable<Product> Products { get; }
        IEnumerable<Domain.Product.Entity.Promotions.IPromotion> Promotions { get; }
        ShoppingCart ShoppingCart { get; }
    }
}
