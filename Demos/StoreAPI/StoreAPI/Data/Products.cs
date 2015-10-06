using StoreAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreAPI.Data
{
    public class Products : List<Product>
    {
        public Products()
        {
            this.Add(new Product() { Id = 1, Name = "test 1", Price = 99, ImageUrl="", Description="" });
            this.Add(new Product() { Id = 2, Name = "test 2", Price = 199, ImageUrl = "", Description = "" });
        }
    }
}
