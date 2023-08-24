import { Button, Col, Container, Row } from "reactstrap";
import UserNav from "../Navbar2/UserNav";
import "./description.css";
import AliceCarousel from "react-alice-carousel";
import { useEffect, useState } from "react";
import Aos from "aos";
import axios from "axios";
import { url } from "../api/api";

function Zakas() {
     const [products, setProduct] = useState([]);
     const [categores, setCategory] = useState([]);

     useEffect(() => {
      Aos.init({
        duration: 1500
      })
          getProduct();
          getCategory();
          // getOnePro();
     }, []);

  function getCategory() {
    axios.get(url + "category/").then(res => setCategory(res.data));
 }

 function getProduct() {
  axios.get(url + "product/").then(res => setProduct(res.data));
}

  const responsive = {
    0: { items: 3 },
    512: { items: 4 },
    1024: { items: 6 },
   };
  // function getOnePro() {
  //  axios.get(url + "product/" + sessionStorage.getItem("productId") + "/").then(res => setProductOne(res.data))
  // }
  return (
    <Container>
      <UserNav />
      <Row className="big">
        <Col md="9">
          <div className="main">
            <div className="big-box" data-aos="zoom-in-right">
              <div className="image">
                <img
                  src="producty.image"
                  alt="."
                />
              </div>
              <div className="image-text">
                {/* <p>{products.title}</p> */}
              </div>
              <div className="image-button position-absolute px-2">
                <Button className="image-btn btn btn-success ms-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-stopwatch "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                  </svg> 30 - 60 minut
                </Button>
                <Button className="image-btn btn btn-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg> 5000 so'm</Button>
                <Button className="image-btn btn btn-success">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-percent"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg> Skidka
                </Button>
              </div>
            </div>
            <div className="products">
                  <AliceCarousel
                    mouseTracking
                    items={categores.map((item, i) => 
                       <>
                          <Button style={{width: "90%", fontSize: "14px"}} className="mt-3" key={i}>{item.title}</Button>
                       </>
                    )}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControlsv
                    />
              <Row className="producty gx-4">
                {products.map((item, i) =>
                <>

                    <Col md="4" className="product-two"  data-aos="fade-up">
                      <div>
                        <img
                          src={item.image}
                          alt="."
                        />
                        <div className="producty-text">
                          <b>{item.name}</b>
                          <p className="m-0">lorem imge itemseeededede</p>
                          <span>{item.price} so'm</span>
                        </div>
                      </div>
                  </Col>
                </> 
                  
                )}
              </Row>
            </div>
          </div>
        </Col>
        <Col md="3" className="position-fixed">
          <div className="small-box">
            <h2><b>Korzinka</b></h2>
            <span className="d-block">Your products...</span>
            <p className="d-inline-block">Time</p>
            <p className="float-end d-inline-block">All price</p>
            <div>
            <h4 className="d-inline-block"><b>30 - 60 min</b></h4>
            <h4 className="float-end d-inline-block"><b>0 so'm</b></h4> 
            </div>
            <Button>Place an order</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Zakas;
