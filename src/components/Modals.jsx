import React from "react";
import CardWebcam from "./CardWebcam";
import Axios from "axios";



class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
    };
    this.getData = this.getData.bind(this);
  }
  
  
  getData() {
    Axios.get(
      `https://api.windy.com/api/webcams/v2/list/webcam=${this.props}?show=webcams:image,location,player&key=wB2e2djyI9TxNvZWjJs0oG4frcQoqA77`
    ).then((res) => this.setState({ dataApi: res.data.result.webcams[0] }));
    console.log(this.state.dataApi);
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const {dataApi} = this.state
    return (
      
      <div>
         
            <CardWebcam
              city={dataApi.location && dataApi.location.city}
              country={dataApi.location && dataApi.location.country}
              video={dataApi.player && dataApi.player.year && dataApi.player.year.embed}
            />
         
          
         
      </div>
    );
  }
}

export default Modals;
