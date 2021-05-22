namespace Klir.TechChallenge.Domain.Product.Entity.Promotions
{
    public interface IPromotion
    {
        public Enum.PromotionType Type { get; }
        public string Description { get; }

        decimal ApplyPromotion(int itemsQuantity, decimal productPrice);
        string ToString();
    }
}
