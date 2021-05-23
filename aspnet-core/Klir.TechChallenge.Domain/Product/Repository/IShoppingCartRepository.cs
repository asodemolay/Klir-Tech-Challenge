using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Domain.Product.Repository
{
    public interface IShoppingCartRepository
    {
        Entity.ShoppingCart GetShoppingCart();

        Entity.ShoppingCart AddItem(Entity.Product product, short quantity);

        Entity.ShoppingCart ChangeItemQuantity(Entity.Product product, short quantity);

        Entity.ShoppingCart RemoveItem(Entity.Product product);
    }
}
