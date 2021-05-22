using Klir.TechChallenge.Domain.Product.Enum;

namespace Klir.TechChallenge.Domain.Product.Entity.Promotions
{
    public class Buy1Get1Free : IPromotion
    {
        const string PROMO_DESCRIPTION = "Buy 1 Get 1 Free";
        const short PROMO_ITENS_TO_DISCOUNT = 2;

        public PromotionType Type => PromotionType.Buy1Get1;
        public string Description => PROMO_DESCRIPTION;

        public decimal ApplyPromotion(int itemsQuantity, decimal productPrice)
        {
            decimal total = itemsQuantity * productPrice;
            for (int i = 0; i < itemsQuantity; i++)
            {
                total -= i % PROMO_ITENS_TO_DISCOUNT == 0 ? productPrice : 0;
            }
            return total;
        }

        public override string ToString() => Description;
    }
}
