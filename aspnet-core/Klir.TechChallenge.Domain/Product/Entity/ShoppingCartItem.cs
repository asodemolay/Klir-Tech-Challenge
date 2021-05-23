namespace Klir.TechChallenge.Domain.Product.Entity
{
    public class ShoppingCartItem
    {
        public Product Product { get; private set; }
        public int Quantity { get; private set; }
        public decimal Price => Product.Price;
        public decimal Total { get; private set; }

        public string PromotionApplied
        {
            get { return _isPromotionApplied ? Product.CurrentPromotion.Description : ""; }
        }

        private bool _isPromotionApplied = false;

        public ShoppingCartItem(Product product, int quantity)
        {
            Product = product;
            Quantity = quantity;
            CalculateItemDetails();
        }

        public ShoppingCartItem UpdateQuantity(int newQuantity)
        {
            Quantity = newQuantity;
            CalculateItemDetails();
            return this;
        }

        private void CalculateItemDetails()
        {
            if (Product.CurrentPromotion != null)
            {
                Total = Product.CurrentPromotion.ApplyPromotion(Quantity, Product.Price);
            }
            else
            {
                Total = Quantity * Product.Price;
            }

            _isPromotionApplied = Total != Quantity * Product.Price;
        }
    }
}
