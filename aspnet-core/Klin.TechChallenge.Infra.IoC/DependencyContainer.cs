using Microsoft.Extensions.DependencyInjection;
using Klir.TechChallenge.Infra.Data.Repository;
using Klir.TechChallenge.Domain.Product.Repository;

namespace Klir.TechChallenge.Infra.IoC
{
    public class DependencyContainer
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddSingleton<Data.Load.IContext, Data.Load.Context>();
            services.AddSingleton<IProductRepository, ProductRepository>();
        }
    }
}
