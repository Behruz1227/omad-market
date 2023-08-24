import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table, FormGroup, Container } from "reactstrap";
import NavBar2 from "../Navbar2/Navbar2";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../api/api";
import { toast, useToast } from 'react-toastify';


function Category() {

     const [categores, setCategory] = useState([]);
     const [addModal, setAddModal, deleteModal, setDeleteModal] = useState(false)

     useEffect(() => {
          getCategory();
     }, []);

     const openAddModal = () => setAddModal(!addModal);
     const openDeleteModal = () => setDeleteModal(!deleteModal);

     function getCategory() {
          axios.get(url + "category/").then(res => setCategory(res.data));
     }

     function addCategory() {
          let obj = {
               title: document.getElementById("title").value
          }
          axios.post(url + "category/", obj)
               .then((res) => {
                    openAddModal();
                    getCategory();
                    toast.success("successfully saved category!");
               }).catch(err => {
                    console.log(err);
                    toast.error(err);
               })
     }
     function delCategory() {
          axios.delete(url + "category/" + 'category.id' + "/").then((res) => {
               openDeleteModal();
               getCategory();
               toast.success("successfully deleted category!");
          }).catch(err => {
               console.log(err);
               toast.error(err);
          })
     }
     return (
          <Container>
               <NavBar2 />
               <Button color="primary" className="px-4 mt-3" onClick={openAddModal}>Add Category</Button>
               <Table bordered className="mt-4">
                    <thead className="text-center">
                         <tr>
                              <th>#</th>
                              <th>Titel</th>
                              <th colSpan="2">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {categores.map((item, i) =>
                              <tr key={i}>
                                   <td>{i + 1}</td>
                                   <td>{item.title}</td>
                                   <td><Button color="warning">Edit</Button></td>
                                   <td><Button color="danger" onClick={openDeleteModal}>Delete</Button></td>
                              </tr>
                         )}
                    </tbody>
               </Table>

               <Modal isOpen={addModal}>
                    <ModalHeader toggle={openAddModal}>Add Category </ModalHeader>
                    <ModalBody>
                         <FormGroup floating>
                              <Input id="title"placeholder="Title" />
                              <Label for="title">Title</Label>
                         </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={openAddModal} className="px-3">Close</Button>
                         <Button color="success" className="px-3" onClick={addCategory}>Save</Button>
                    </ModalFooter>
               </Modal>


               <Modal isOpen={deleteModal}>
                    <ModalHeader toggle={openDeleteModal}>Delete category</ModalHeader>
                    <ModalBody>
                         <FormGroup floating>
                              <h3>Siz buni o'chirishga ishonchingiz komilmi?</h3>
                         </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={openDeleteModal} className="px-3">Close</Button>
                         <Button color="success" className="px-3" onClick={delCategory}>Save</Button>
                    </ModalFooter>
               </Modal>
          </Container>
     )
}
export default Category;