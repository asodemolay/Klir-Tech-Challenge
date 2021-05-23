
using System.ComponentModel.DataAnnotations;

namespace Klir.TechChallenge.Domain.Product.Entity.Promotions
{
    public interface IPromotion
    {
        [Required]
        public Enum.PromotionType Type { get; }

        [Required]
        public string Description { get; }

        decimal ApplyPromotion(int itemsQuantity, decimal productPrice);
        string ToString();
    }
}
