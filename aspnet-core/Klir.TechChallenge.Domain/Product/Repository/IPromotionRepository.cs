using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Klir.TechChallenge.Domain.Product.Repository
{
    public interface IPromotionRepository
    {
        IEnumerable<Entity.Promotions.IPromotion> GetAllPromotions();
    }
}
