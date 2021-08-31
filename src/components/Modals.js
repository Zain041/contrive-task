import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Container,Row,Col,Input, Label, Table } from 'reactstrap';
import '../assets/css/modals.css'
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import {FetchUsers} from '../store/actions/profileActions'
 function Modals(props) {
    const {
        className
      } = props;
    const [modal, setModal] = useState(false);
    const [modalB, setModalB] = useState(false);
    const [modalC, setModalC] = useState(false);
    const [displayEven,setDisplayEven]= useState(false)
    const [displayAll,setDisplayAll]= useState(true)
    const [displayAllB,setDisplayAllB]= useState(true)
    const [displayMale,setDisplayMale]= useState(false)
    const [displayFemale,setDisplayFemale]= useState(false)
    const [id,setId]=useState("")
    const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")

   
   

  const toggle = () => setModal(!modal);
  const toggleB = () => setModalB(!modalB);
  const toggleC = () => setModalC(!modalC);

  useEffect(()=>{
props.FetchUsers()
  },[])

  console.log("checks",displayEven,displayAll)
    return (
        <div>
            <Container>
            <Modal size="md" isOpen={modalC} toggle={toggleC} className={className}>
        <ModalHeader toggle={toggleC}>Single User</ModalHeader>
        <ModalBody>
            <Scrollbars style={{ width: 470, height: 300 }}>
        <Table  hover>
      <thead>
        <tr>
        <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        
        </tr>
      </thead>
     <tbody>
          
            
                <tr >
         
         <td>{id}</td>
          <td>{fullName}</td>
          <td>{email}</td>
        </tr>
             
        
       
        
      </tbody>
    </Table>
    </Scrollbars >
  
        </ModalBody>
        <ModalFooter>
        
        
          <Button  className="btn-c" onClick={toggleC}>Close</Button>
        </ModalFooter>
      </Modal>
    



            <Modal size="md" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>All Users</ModalHeader>
        <ModalBody>
            <Scrollbars style={{ width: 470, height: 300 }}>
        <Table  hover>
      <thead>
        <tr>
        <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        
        </tr>
      </thead>
      {displayAll && <tbody>
          {props.users.length!=0?props.users.data.map((items,index)=>{
              return(
                <tr onClick={()=>{
                    setId(items.id)
                    setFullName(items.name)
                    setEmail(items.email)
                    toggleC()
                }} key={index}>
         
         <td>{items.id}</td>
          <td>{items.name}</td>
          <td>{items.email}</td>
        </tr>
              )
          }):"loading"}
        
       
        
      </tbody>}

      {displayEven && <tbody>
          {props.users.length!=0?props.users.data.filter(items=>items.id%2==0).map((items,index)=>{
              return(
                <tr onClick={()=>{
                    setId(items.id)
                    setFullName(items.name)
                    setEmail(items.email)
                    toggleC()
                }} key={index}>
         
         <td>{items.id}</td>
          <td>{items.name}</td>
          <td>{items.email}</td>
        </tr>
              )
          }):"loading"}
        
       
        
      </tbody>}
    </Table>
    </Scrollbars >
  
        </ModalBody>
        <ModalFooter>
        <div className="mr-5">
        <Input  addon onChange={(e)=>{
            console.log(e.target.checked)
            if(e.target.checked==true){
                setDisplayEven(true)
                setDisplayAll(false)
            }else if(e.target.checked==false){
                setDisplayEven(false)
                setDisplayAll(true)
            }
        }} type="checkbox"/> <Label >Even Only</Label>
        </div>
        <Button color="primary" >All Users</Button>{' '}
          <Button color="success"  onClick={()=>{toggleB()
        toggle()
        }}>Active Users</Button>
          <Button color="danger" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalB} toggle={toggleB} className={className}>
        <ModalHeader toggle={toggleB}>Active Users</ModalHeader>
        <ModalBody>
        <Scrollbars style={{ width: 470, height: 300 }}>
        <Table  hover>
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Email</th>
        
        </tr>
      </thead>
      {displayAllB && <tbody>
          {props.users.length!=0?props.users.data.filter(items=>items.status=="active").map((items,index)=>{
              return(

                <tr onClick={()=>{
                    setId(items.id)
                    setFullName(items.name)
                    setEmail(items.email)
                    toggleC()
                }} key={index}>
         
         <td>{items.id}</td>
          <td>{items.name}</td>
          <td>{items.email}</td>
        </tr>
              )
          }):"loading"}
        
       
        
      </tbody>}

      {displayMale && <tbody>
          {props.users.length!=0?props.users.data.filter(items=>items.gender=="male").map((items,index)=>{
              return(
                <tr onClick={()=>{
                    setId(items.id)
                    setFullName(items.name)
                    setEmail(items.email)
                    toggleC()
                }} key={index}>
         
         <td>{items.id}</td>
          <td>{items.name}</td>
          <td>{items.email}</td>
        </tr>
              )
          }):"loading"}
        
       
        
      </tbody>} 
      
      {displayFemale && <tbody>
          {props.users.length!=0?props.users.data.filter(items=>items.gender=="female").map((items,index)=>{
              return(
                <tr onClick={()=>{
                    setId(items.id)
                    setFullName(items.name)
                    setEmail(items.email)
                    toggleC()
                }} key={index}>
         
         <td>{items.id}</td>
          <td>{items.name}</td>
          <td>{items.email}</td>
        </tr>
              )
          }):"loading"}
        
       
        
      </tbody>} 
      </Table>
   
      
    </Scrollbars >
  
  
        </ModalBody>
        <ModalFooter>
            <div className="">
            <Input  addon onChange={(e)=>{
            console.log(e.target.checked)
            if(e.target.checked==true){
                setDisplayAllB(false)
            setDisplayFemale(true)
            setDisplayMale(false)
            }else if(e.target.checked==false){
                setDisplayAllB(true)
            setDisplayFemale(false)
            setDisplayMale(false)
            }
        }} type="checkbox"/> <Label className="mr-1" >Female Only</Label>
         <Input  addon onChange={(e)=>{
            console.log(e.target.checked)
            if(e.target.checked==true){
                setDisplayAllB(false)
            setDisplayFemale(false)
            setDisplayMale(true)
            }else if(e.target.checked==false){
                setDisplayAllB(true)
            setDisplayFemale(false)
            setDisplayMale(false)
            }
        }} type="checkbox"/> <Label >Male Only</Label>
       
        </div>
          <Button color="primary" onClick={()=>{toggle()
         setDisplayAll(true)
        toggleB()}}>All Users</Button>{' '}
          <Button color="success" >Active Users</Button>
          <Button color="danger" onClick={toggleB}>Close</Button>
        </ModalFooter>
      </Modal>
                <Row >
                    <Col md="12" lg="12" >
                        <div className="wrapper text-center">
                            <div className="btn-wrapper">
                        <Button onClick={toggle}  className="btn-a mr-3 ">Open Modal A</Button>
                        <Button onClick={toggleB} className="btn-b">Open Modal B</Button>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
const mapStateToProps = (state) => ({
	users: state.users.users,
  
  });

export default connect(mapStateToProps,{FetchUsers})(Modals)
