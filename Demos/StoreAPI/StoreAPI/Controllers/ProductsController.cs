using StoreAPI.Data;
using StoreAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace StoreAPI.Controllers
{
    public class ProductsController : ApiController
    {
        private List<Product> data;
        public List<Product> Data
        {
            get
            {
                if (data == null)
                    data = new Products();
                return data;	
            }
        }

        // GET: api/Products
        public IEnumerable<Product> Get()
        {
            return Data;
        }

        // GET: api/Products/5
        public Product Get(int id)
        {
            return Data.Find(p => p.Id == id);
        }

        // POST: api/Products
        public int Post([FromBody]Product newProduct)
        {
            newProduct.Id = 99;
            Data.Add(newProduct);
            return 99;
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]Product updatedProduct)
        {
            Product prod = Data.Find(p => p.Id == updatedProduct.Id);
            if (prod != null)
            {
                prod.Name = "updated!";
            }
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
            Data.Remove(Data.Find(p => p.Id == id));
        }
    }
}
