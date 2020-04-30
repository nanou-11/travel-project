import React ,{ useState } from 'react';
import styles from './Map.module.css'
import Modals from './Modals'
import {  Modal, Button } from "reactstrap";
import {Link} from 'react-router-dom'


function MapWorld({ city, country, video }) {
  
  const { className } = { city, country, video };

  const [modal1, setModal1] = useState(false);
<<<<<<< HEAD
  const toggle1 = () => setModal1(!modal1);
=======
  const toggle1 = () => setModal1(!modal1)
>>>>>>> 6b2a5d06f8827e38c8716acbc69844736d28f6a0

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
<<<<<<< HEAD
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
=======
        <div onClick={toggle1}>
        <img href="#" className={styles.pin} style={{top: 113, left: 570,}} title="Îles-Féroé" alt ="pins" id="1545396501" onClick={toggle1}/>
        <a className={styles.pin2} style={{top: 113, left: 575,}}>1</a>
        <Modal isOpen={modal1} toggle={toggle1} className={className}>
          <Modals id="1545396501"/>
        </Modal>
        </div>
        <hr className={styles.chemin1} />

        <div onClick={toggle2}>
        <img className={styles.pin} href="#" style={{top: 164, left: 561}} title="Irlande" alt ="pins" id="1250613112"onClick={toggle2}/>
        <a className={styles.pin2} style={{top: 164, left: 566,}}>2</a>
        <Modal isOpen={modal2} toggle={toggle2} className={className}>
          <Modals id="1250613112"/>
        </Modal>
        </div>
        <hr className={styles.chemin2} />

        <div onClick={toggle3}>
        <img className={styles.pin} href="#" style={{top: 485, left: 805}} title="Maurice" alt ="pins" id="1490713341"onClick={toggle3}/>
        <a className={styles.pin2} style={{top: 485, left: 810,}}>9</a>
        <Modal isOpen={modal3} toggle={toggle3} className={className}>
          <Modals id="1490713341"/>
        </Modal>
        </div>
        <hr className={styles.chemin3} />

        <div onClick={toggle4}>
        <img className={styles.pin} href="#" style={{top: 546, left: 1133}} title="Sydney" alt ="pins" id ="1179853135"onClick={toggle4}/>
        <a className={styles.pin2} style={{top: 546, left: 1134,}}>10</a>
        <Modal isOpen={modal4} toggle={toggle4} className={className}>
          <Modals id="1179853135"/>
        </Modal>
        </div>
        <hr className={styles.chemin4} />

        <div onClick={toggle5}>
        <img className={styles.pin} href="#" style={{top: 368, left: 855}} title="Maldives" alt ="pins" id="1583783403"onClick={toggle5}/>
        <a className={styles.pin2} style={{top: 368, left: 860,}}>7</a>
        <Modal isOpen={modal5} toggle={toggle5} className={className}>
          <Modals id="1583783403"/>
        </Modal>
        </div>
        <hr className={styles.chemin5} />

        <div onClick={toggle6}>
        <img className={styles.pin} href="#" style={{top: 367, left: 949}} title="Thaïlande" alt ="pins" id="1556137270"onClick={toggle6}/>
        <a className={styles.pin2} style={{top: 367, left: 954,}}>8</a>
        <Modal isOpen={modal6} toggle={toggle6} className={className}>
          <Modals id="1556137270"/>
        </Modal>
        </div>
        <hr className={styles.chemin6} />

        <div onClick={toggle7}>
        <img className={styles.pin} href="#" style={{top: 235, left: 1052}} title="Corée du sud" alt ="pins" id="1519597326"onClick={toggle7}/>
        <a className={styles.pin2} style={{top: 235, left: 1057,}}>6</a>
        <Modal isOpen={modal7} toggle={toggle7} className={className}>
          <Modals id="1519597326"/>
        </Modal>
        </div>
          <hr className={styles.chemin7} />
        
        <div onClick={toggle8}>
        <img className={styles.pin} href="#" style={{top: 67, left: 661}} title="Norvège" alt ="pins" id="1423839533"onClick={toggle8}/>
        <a className={styles.pin2} style={{top: 67, left: 666,}}>5</a>
        <Modal isOpen={modal8} toggle={toggle8} className={className}>
          <Modals id="1423839533"/>
        </Modal>
        </div>
        <hr className={styles.chemin8} />

        <div onClick={toggle9}>
        <img className={styles.pin} href="#" style={{top: 161, left: 1156}} title="Russie" alt ="pins" id="1522013332"onClick={toggle9}/>
        <a className={styles.pin2} style={{top: 161, left: 1157,}}>12</a>
        <Modal isOpen={modal9} toggle={toggle9} className={className}>
          <Modals id="1522013332"/>
        </Modal>
        </div>
        <hr className={styles.chemin9} />
        
        <div onClick={toggle10}>
        <img className={styles.pin} href="#" style={{top: 488, left: 789}} title="La Réunion" alt ="pins" id="1553393899"onClick={toggle10}/>
        <a className={styles.pin2} style={{top: 488, left: 794,}}>4</a>
        <Modal isOpen={modal10} toggle={toggle10} className={className}>
          <Modals id="1553393899"/>
        </Modal>
        </div>
        <hr className={styles.chemin10} />

        <div onClick={toggle11}>
        <img className={styles.pin} href="#" style={{top: 116, left: 64}} title="États-Unis d'Amérique" alt ="pins" id="1383622213"onClick={toggle11}/>
        <a className={styles.pin2} style={{top: 116, left: 69,}}>3</a>
        <Modal isOpen={modal11} toggle={toggle11} className={className}>
          <Modals id="1383622213"/>
        </Modal>
        </div>
        <hr className={styles.chemin11} />
        
        <div onClick={toggle12}>
        <img className={styles.pin} href="#" style={{top: 248, left: 1084}} title="Japon" alt ="pins" id="1280161113"onClick={toggle12} />
        <a className={styles.pin2} style={{top: 248, left: 1085,}}>11</a>
>>>>>>> 6b2a5d06f8827e38c8716acbc69844736d28f6a0
        <Modal isOpen={modal12} toggle={toggle12} className={className}>  
          <Modals id="1280161113"/>
        </Modal>
        </div>

        <Button tag={Link} to='/end' className={styles.buttonEnd} color="info">Trip completed</Button>

      </div>

    )
};

export default MapWorld;