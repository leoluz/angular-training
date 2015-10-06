using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StoreAPI.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public decimal Price { get; set; }

        public DateTime ModifiedDate { get; set; }

        public string Description { get; set; }

        public bool FixedPrice { get; set; }

        public bool Discontinued { get; set; }

        public string ImageUrl { get; set; }
    }
}
