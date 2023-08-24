import { Button, Col, Container, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import UserNav from "../Navbar2/UserNav";
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import "./home.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import { url } from "../api/api";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProduct] = useState([]);
     const [categores, setCategory] = useState([]);

     useEffect(() => {
          getProduct();
          getCategory();
     }, []);

  function getCategory() {
    axios.get(url + "category/").then(res => setCategory(res.data));
 }

 function getProduct() {
  axios.get(url + "product/").then(res => setProduct(res.data));
}

  useEffect(() => {
    Aos.init({
      duration: 1500
    })
  }, [])
  
  const responsive = {
    0: { items: 3 },
    512: { items: 4 },
    1024: { items: 6 },
  };
  function pushDes(id) {
    sessionStorage.setItem("productId", id)
    document.getElementById("pushDes").click();
  }
    return (
        <Container>
        <Link to="/home/description" id="pushDes"></Link>
            <UserNav />
            <div className="pt-5">
                <div className="p_main" data-aos="zoom-out-down">
                    <InputGroup className="w-75">
                        <Input placeholder="🔍Search...."/>
                        <InputGroupText>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </InputGroupText>
                    </InputGroup>
                   
                </div>
                    <div className="home_category mt-5 slider">
                        <div className="slide-track">
                            <AliceCarousel 
                                mouseTracking 
                                items={categores.map((item, i) => 
                                <>
                                    <Button key={i}>{item.title}</Button>
                                </>
                                )} 
                                responsive={responsive} 
                                disableButtonsControls 
                                disableDotsControlsv 
                                autoPlay 
                                autoPlayInterval={1000}
                                animationDuration={1}
                                />
                        </div>   
                    </div>
                    <div>
                        <Row className="products_ gx-4">
                            {products.map((item, i) => 
                            <>
                            <Col md="3" className="product-one"  data-aos="fade-up" onClick={() => pushDes(item.id)}>
                                    <div>
                                        <img src={item.image} alt="."/>
                                        <div className="product-text">
                                            <b>{item.name}</b>
                                            <p className="m-0">{item.description}</p>
                                            <span>{item.price} so'm</span>
                                        </div>
                                    </div>   
                                </Col>
                            </>
                            )}  
                        </Row>
                    </div>
            </div>
            
        </Container>
    )
}

export default Home;