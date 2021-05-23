using Klir.TechChallenge.Domain.Product.Entity;
using Klir.TechChallenge.Domain.Product.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Infra.Data.Repository
{
    public class ShoppingCartRepository : IShoppingCartRepository
    {
        private readonly Load.IContext _context;

        public ShoppingCartRepository(Load.IContext context) => _context = context;
        public ShoppingCart AddItem(Product product, short quantity)
        {
            return _context.ShoppingCart.AddItem(product, quantity);
        }

        public ShoppingCart ChangeItemQuantity(Product product, short quantity)
        {
            return _context.ShoppingCart.ChangeItemQuantity(product, quantity);
        }

        public ShoppingCart GetShoppingCart()
        {
            return _context.ShoppingCart;
        }

        public ShoppingCart RemoveItem(Product product)
        {
            return _context.ShoppingCart.RemoveItem(product);
        }
    }
}
