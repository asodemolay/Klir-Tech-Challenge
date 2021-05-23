using Klir.TechChallenge.Domain.Product.Entity;
using Klir.TechChallenge.Domain.Product.Entity.Promotions;
using Klir.TechChallenge.Domain.Product.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Infra.Data.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly Load.IContext _context;


        public ProductRepository(Load.IContext context) => _context = context;

        public Product AddPromotionToProduct(int productId, IPromotion promotion)
        {
            var product = GetProductById(productId);
            product.SetPromotion(promotion);
            return product;
        }

        public Product GetProductById(int id)
        {
            return _context.Products.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Product> GetProductByName(string name)
        {
            return _context.Products.Where(p => p.Name == name).ToList();
        }

        public IEnumerable<Product> GetProducts()
        {
            return _context.Products;
        }

        public Product RemoveProductPromotion(int productId)
        {
            var product = GetProductById(productId);
            product.RemovePromotion();
            return product;
        }
    }
}
