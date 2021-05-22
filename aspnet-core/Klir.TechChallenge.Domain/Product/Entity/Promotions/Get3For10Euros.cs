using Klir.TechChallenge.Domain.Product.Enum;

namespace Klir.TechChallenge.Domain.Product.Entity.Promotions
{
    public class Get3For10Euros : IPromotion
    {
        const string PROMO_DESCRIPTION = "Get 3 for 10 Euro";
        const short PROMO_ITENS_TO_DISCOUNT = 3;
        const decimal PROMO_FINAL_VALUE = 10;

        public PromotionType Type => PromotionType.Get3For10Euros;
        public string Description => PROMO_DESCRIPTION;

        public decimal ApplyPromotion(int itemsQuantity, decimal productPrice)
        {
            decimal total = itemsQuantity * productPrice;
            for (int i = 0; i < itemsQuantity; i++)
            {
                if (i % PROMO_ITENS_TO_DISCOUNT == 0)
                {
                    total -= PROMO_ITENS_TO_DISCOUNT * productPrice;
                    total += PROMO_FINAL_VALUE;
                }
            }
            return total;
        }

        public override string ToString() => Description;
    }
}
