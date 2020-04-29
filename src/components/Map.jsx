import React from 'react';
import styles from './Map.module.css'

const worldImage = require('./img/map.jpg')
const mapPin = require('./img/pin.svg')

function Map() {
    return (
      <div className={styles.background}>
        <img className={styles.pin} src={mapPin} width="20px" border="0" alt ="pins"/>  
      </div>

    )
};

export default Map;