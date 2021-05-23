using Klir.TechChallenge.Domain.Product.Entity;
using Klir.TechChallenge.Domain.Product.Entity.Promotions;
using System.Collections.Generic;

namespace Klir.TechChallenge.Infra.Data.Load
{
    public class Context : IContext
    {
        public Context()
        {
            Products = new List<Product>()
            {
                new Product(1, "Product A", 20),
                new Product(2, "Product B", 4),
                new Product(3, "Product C", 2),
                new Product(4, "Product D", 4)
            };

            Promotions = new List<IPromotion>()
            {
                new Buy1Get1Free(),
                new Get3For10Euros()
            };

            ShoppingCart = new ShoppingCart();
        }

        public IEnumerable<Product> Products { get; private set; }

        public IEnumerable<IPromotion> Promotions { get; private set; }

        public ShoppingCart ShoppingCart { get; private set; }
    }
}
