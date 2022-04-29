import React from 'react';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import BasePageInidividual from '../BasePageIndividual';
// import './Ascendance.css'
import img1 from './a.jpg';
import img2 from './a_1.png';
import img3 from './a_2.png';
import img4 from './a_3.png';

class Ascendance extends BasePageInidividual  {

    
    render(){
    
        return (
            
            <div className='shadow-lg'>
                
                {this.addSplashPage(img1)}

                <Row className="justify-content-md-center">

                    {this.addBodyCol(6,'Ascendance','Display picture attributes','orem Ipsum is simply dummy text of the printing and typesetting industry.')}
                    {this.addImageCol(6,img2)}

                </Row>

                <Row className="justify-content-md-center">
                    
                    {this.addBodyCol(6,'Features','Display picture attributes','orem Ipsum is simply dummy text of the printing and typesetting industry.')}                    
                    {this.addImageCol(6,img4)}

                </Row>
            </div>
            
        );
    }
}

export default Ascendance;