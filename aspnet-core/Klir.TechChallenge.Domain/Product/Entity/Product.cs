﻿using Klir.TechChallenge.Domain.Product.Entity.Promotions;

namespace Klir.TechChallenge.Domain.Product.Entity
{
    public class Product
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public decimal Price { get; private set; }
        public IPromotion CurrentPromotion { get; private set; }

        internal Product(string name, decimal price)
        {
            Name = name;
            Price = price;
        }

        public Product ChangePrice(decimal newPrice)
        {
            Price = newPrice;
            return this;
        }

        public Product SetPromotion(IPromotion promotion)
        {
            CurrentPromotion = promotion;
            return this;
        }
    }
}