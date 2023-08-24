import { Button, Label, Modal, ModalBody, ModalFooter, Container, ModalHeader, Table, FormGroup, InputGroup, Input, InputGroupText} from "reactstrap";
import NavBar2 from "../Navbar2/Navbar2";
import { useEffect, useState } from "react";
import axios from "axios"
import { url } from "../api/api";
import { toast } from "react-toastify";
import "./product.css";

function Product() {

     const [product, setProduct] = useState([]);
     const [categores, setCategory] = useState([]);
     const [addModal, setAddModal] = useState(false);

     useEffect(() => {
          getProduct();
          getCategory();
     }, []);

     const openAddModal = () => setAddModal(!addModal);

     function getProduct() {
          axios.get(url + "product/").then(res => setProduct(res.data));
     }

     function getCategory() {
          axios.get(url + "category/").then(res => setCategory(res.data))
     }

     function search() {
          let v = document.getElementById("search").value;
          if(!!v) axios.get(url = "product/?title=" + v).then(res => setProduct(res.data));
          else getProduct();
     }

     function addProduct() {
          let obj = {
               image: document.getElementById("img").files[0],
               title: document.getElementById("title").value,
               description: document.getElementById("description").value,
               price: document.getElementById("price").value,
               capacity: document.getElementById("capacity").value,
               category_id: document.getElementById("category").value
          }
          axios.post(url + "product/", obj)
               .then(() => {
                    openAddModal();
                    toast.success("successfully saved product!");
               }).catch(err => {
                    console.log(err);
                    toast.error(err);
               });
     }
     return (
          <Container>
               <NavBar2 />
               <Button color="primary" className="px-4 mt-3" onClick={openAddModal}>Add Product</Button>
               <InputGroup className="w-27">
                    <Input placeholder="🔍Search..." id="search"/>
                    <InputGroupText className="bg-success text-light" onClick={search}>search</InputGroupText>
               </InputGroup>
               <Table bordered className="mt-4">
                    <thead className="text-center">
                         <tr>
                              <th>#</th>
                              <th>Image</th>
                              <th>Titel</th>
                              <th>Description</th>
                              <th>Price (UZS)</th>
                              <th colSpan="2">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {product.map((item, i) =>
                              <tr key={i}>
                                   <td>{i + 1}</td>
                                   <td><img className="img-style" src={item.image} alt="."/></td>
                                   <td>{item.title}</td>
                                   <td>{item.description}</td>
                                   <td>{item.price}</td>
                                   <td><Button color="warning">Edit</Button></td>
                                   <td><Button color="danger">Delete</Button></td>
                              </tr>
                         )}
                    </tbody>
               </Table>
               {/* Add Product */}
               <Modal isOpen={addModal}>
               <ModalHeader toggle={openAddModal}>Add product</ModalHeader>
               <ModalBody>
                    <FormGroup>
                         <Input id="img" type="file" />
                    </FormGroup>
                    <FormGroup floating>
                         <Input id="title" placeholder="Title" />
                         <Label for="title">Title</Label>
                    </FormGroup>
                    <FormGroup floating>
                         <Input id="description" placeholder="Description"></Input>
                         <Label for="description">Description</Label>
                    </FormGroup>
                    <FormGroup floating>
                         <Input id="price" placeholder="Price"></Input>
                         <Label for="price">Price</Label>
                    </FormGroup>
                    <FormGroup floating>
                         <Input id="capacity" placeholder="Capacity"></Input>
                         <Label for="capacity">Capacity</Label>
                    </FormGroup>
                    <select className="form-select" id="category">
                         <option selected disabled>Select category</option>
                         {categores.map((item, i) =>
                              <option key={i} value={item.id}>{item.title}</option>
                         )}
                    </select>

                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={openAddModal} className="px-3">Close</Button>
                         <Button color="success" className="px-3" onClick={addProduct}>Save</Button>
                    </ModalFooter>
                    </Modal>
          </Container>
          )

}
export default Product;