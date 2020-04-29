import React from 'react';
import styles from './Map.module.css'

<<<<<<< HEAD
function Map() {
    return (
      <div className={styles.background}>
        <img className={styles.pin} style={{top: 113, left: 570}} title="Îles-Féroé" alt ="pins"/>
        <img className={styles.pin} style={{top: 485, left: 799}} title="Maurice" alt ="pins"/>
        <img className={styles.pin} style={{top: 164, left: 561}} title="Irlande" alt ="pins"/>
        <img className={styles.pin} style={{top: 546, left: 1130}} title="Sydney" alt ="pins"/>
        <img className={styles.pin} style={{top: 368, left: 855}} title="Maldives" alt ="pins"/>
        <img className={styles.pin} style={{top: 367, left: 949}} title="Thaïlande" alt ="pins"/>
        <img className={styles.pin} style={{top: 235, left: 1052}} title="Corée du sud" alt ="pins"/>
        <img className={styles.pin} style={{top: 67, left: 661}} title="Norvège" alt ="pins"/>
        <img className={styles.pin} style={{top: 161, left: 1156}} title="Russie" alt ="pins"/>
        <img className={styles.pin} style={{top: 488, left: 791}} title="La Réunion" alt ="pins"/>
        <img className={styles.pin} style={{top: 116, left: 64}} title="États-Unis d'Amérique" alt ="pins"/>
        <img className={styles.pin} style={{top: 248, left: 1084}} title="Japon" alt ="pins"/>

=======
const worldImage = require('./img/map.jpg')
const mapPin = require('./img/pin.svg')

function Map() {
    return (
      <div className={styles.background}>
        <img className={styles.pin} src={mapPin} width="20px" border="0" alt ="pins"/>  
>>>>>>> 89a0edec904c02e3147cf8378fd4fcbd6747b22c
      </div>

    )
};

export default Map;