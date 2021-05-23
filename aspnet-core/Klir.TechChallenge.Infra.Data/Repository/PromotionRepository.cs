using Klir.TechChallenge.Domain.Product.Entity.Promotions;
using Klir.TechChallenge.Domain.Product.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Infra.Data.Repository
{
    public class PromotionRepository : IPromotionRepository
    {
        private readonly Load.IContext _context;

        public PromotionRepository(Load.IContext context) => _context = context;

        public IEnumerable<IPromotion> GetAllPromotions()
        {
            return _context.Promotions;
        }
    }
}
