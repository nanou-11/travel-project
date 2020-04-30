import React ,{ useState } from 'react';
import styles from './Map.module.css'
import Modals from './Modals'
import {  Modal } from "reactstrap";


function MapWorld({ city, country, video }) {
  
  const { buttonLabel, className } = { city, country, video };

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);
  
  const [modal3, setModal3] = useState(false);
  const toggle3 = () => setModal3(!modal3);

  const [modal4, setModal4] = useState(false);
  const toggle4 = () => setModal4(!modal4);

  const [modal5, setModal5] = useState(false);
  const toggle5 = () => setModal5(!modal5);

  const [modal6, setModal6] = useState(false);
  const toggle6 = () => setModal6(!modal6);

  const [modal7, setModal7] = useState(false);
  const toggle7 = () => setModal7(!modal7);

  const [modal8, setModal8] = useState(false);
  const toggle8 = () => setModal8(!modal8);

  const [modal9, setModal9] = useState(false);
  const toggle9 = () => setModal9(!modal9);

  const [modal10, setModal10] = useState(false);
  const toggle10 = () => setModal10(!modal10);

  const [modal11, setModal11] = useState(false);
  const toggle11= () => setModal11(!modal11);

  const [modal12, setModal12] = useState(false);
  const toggle12 = () => setModal12(!modal12);

    return (
      <div className={styles.background}>
        <img className={styles.pin} style={{top: 113, left: 570}} title="Îles-Féroé" alt ="pins" id="1545396501" onClick={toggle1}/>
        <Modal isOpen={modal1} toggle={toggle1} className={className}>
          <Modals id="1545396501"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 164, left: 561}} title="Irlande" alt ="pins" id="1250613112"onClick={toggle2}/>
        <Modal isOpen={modal2} toggle={toggle2} className={className}>
          <Modals id="1250613112"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 485, left: 799}} title="Maurice" alt ="pins" id="1490713341"onClick={toggle3}/>
        <Modal isOpen={modal3} toggle={toggle3} className={className}>
          <Modals id="1490713341"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 546, left: 1130}} title="Sydney" alt ="pins" id ="1179853135"onClick={toggle4}/>
        <Modal isOpen={modal4} toggle={toggle4} className={className}>
          <Modals id="1179853135"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 368, left: 855}} title="Maldives" alt ="pins" id="1583783403"onClick={toggle5}/>
        <Modal isOpen={modal5} toggle={toggle5} className={className}>
          <Modals id="1583783403"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 367, left: 949}} title="Thaïlande" alt ="pins" id="1556137270"onClick={toggle6}/>
        <Modal isOpen={modal6} toggle={toggle6} className={className}>
          <Modals id="1556137270"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 235, left: 1052}} title="Corée du sud" alt ="pins" id="1519597326"onClick={toggle7}/>
        <Modal isOpen={modal7} toggle={toggle7} className={className}>
          <Modals id="1519597326"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 67, left: 661}} title="Norvège" alt ="pins" id="1423839533"onClick={toggle8}/>
        <Modal isOpen={modal8} toggle={toggle8} className={className}>
          <Modals id="1423839533"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 161, left: 1156}} title="Russie" alt ="pins" id="1522013332"onClick={toggle9}/>
        <Modal isOpen={modal9} toggle={toggle9} className={className}>
          <Modals id="1522013332"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 488, left: 791}} title="La Réunion" alt ="pins" id="1553393899"onClick={toggle10}/>
        <Modal isOpen={modal10} toggle={toggle10} className={className}>
          <Modals id="1553393899"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 116, left: 64}} title="États-Unis d'Amérique" alt ="pins" id="1383622213"onClick={toggle11}/>
        <Modal isOpen={modal11} toggle={toggle11} className={className}>
          <Modals id="1383622213"/>
        </Modal>
        <img className={styles.pin} href="#" style={{top: 248, left: 1084}} title="Japon" alt ="pins" id="1280161113"onClick={toggle12}/>
        <Modal isOpen={modal12} toggle={toggle12} className={className}>  
          <Modals id="1280161113"/>
        </Modal>

      </div>

    )
};

export default MapWorld;