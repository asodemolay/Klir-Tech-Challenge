using System.Collections.Generic;
using System.Linq;

namespace Klir.TechChallenge.Domain.Product.Entity
{
    public class ShoppingCart
    {
        public IList<ShoppingCartItem> ShoppingCartItems { get; private set; }
        public decimal Total => GetTotal();

        private decimal GetTotal()
        {
            return ShoppingCartItems.Sum(i => i.Total);
        }

        public ShoppingCart AddItem(Product product , short quantity)
        {
            if (ShoppingCartItems.Count(p => p.Product.Id == product.Id) == 0)
            {
                ShoppingCartItems.Add(new ShoppingCartItem(product, quantity));
            }
            else
            {
                var item = ShoppingCartItems.First(p => p.Product.Id == product.Id);
                _ = item.UpdateQuantity(quantity);
            }
            return this;
        }
    }
}
