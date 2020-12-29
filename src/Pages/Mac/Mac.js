import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Mac() {
  const [MacProducts, setMacProducts] = useState([]);

  useEffect(() => {
    fetch("/mac.json")
      .then((res) => res.json())
      .then((products) => {
        setMacProducts(() => products.products);
      });
  }, []);

  console.log(MacProducts);
  let order = 1;
  return (
    <div className= "top-50">
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper large">
                Which Mac notebook is right for you?
								</div>
            
            </div>
          </div>
          {
            MacProducts.map((product) => {
              let id = product.Id;
              let productPage = "/iphone/" + id;

              let order1 = 1;
              let order2 = 2;
              if (order != 1) {
                order1 = 2;
                order2 = 1;
                order--;
              } else {
                order++;
              }

              let Macitems =
                <div key={id} className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                    <div className="new-alert">
                      {product.Alert}
                    </div>
                    <div className="monthly-price inch">
                      {product.PriceRange}
                    </div>
                    <div className="product-title">
                      {product.Title}
                    </div>
                    <div className="description-wraper">
                      {product.Brief}
                    </div>


                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link to={productPage}>Learn more
													</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6 order-${order2}`}>
                    <div className="prodict-image">
                      <img src={product.img} />
                    </div>
                  </div>
                </div>
                ;
              return Macitems;
            })
          }

        </div>
      </section>
    </div>
  );
}

export default Mac
