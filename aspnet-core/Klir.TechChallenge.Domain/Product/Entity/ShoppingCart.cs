using System.Collections.Generic;
using System.Linq;

namespace Klir.TechChallenge.Domain.Product.Entity
{
    public class ShoppingCart
    {
        public ShoppingCart()
        {
            ShoppingCartItems = new List<ShoppingCartItem>();
        }
        public IList<ShoppingCartItem> ShoppingCartItems { get; private set; }
        public decimal Total => GetTotal();

        private decimal GetTotal()
        {
            return ShoppingCartItems.Count > 0 ? ShoppingCartItems.Sum(i => i.Total) : 0;
        }

        public ShoppingCart AddItem(Product product, short quantity)
        {
            if (ShoppingCartItems.Any(p => p.Product.Id == product.Id) == false)
            {
                ShoppingCartItems.Add(new ShoppingCartItem(product, quantity));
            }
            else
            {
                var item = ShoppingCartItems.First(p => p.Product.Id == product.Id);
                _ = item.UpdateQuantity(item.Quantity + quantity);
            }
            return this;
        }

        public ShoppingCart ChangeItemQuantity(Product product, short newQuantity)
        {
            if (newQuantity > 0)
            {
                var item = ShoppingCartItems.First(p => p.Product.Id == product.Id);
                _ = item.UpdateQuantity(newQuantity);
            }
            else
            {
                _ = RemoveItem(product);
            }

            return this;
        }

        public ShoppingCart RemoveItem(Product product)
        {
            var item = ShoppingCartItems.First(p => p.Product.Id == product.Id);

            if (item != null)
            {
                ShoppingCartItems.Remove(item);
            }

            return this;
        }
    }
}
