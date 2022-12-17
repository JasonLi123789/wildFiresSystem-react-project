import GoogleMapReact from "google-map-react";

const Map = ({center, zoom}) =>{
    return(
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: 
                    'AIzaSyBDBnHsQEPORTYmuD9lbs_1KfC5Lyrf3TY'}}
                    defaultCenter = {center}
                    defaultZoom = {zoom}
                >
            
            </GoogleMapReact>
        </div>
    )
}

Map.defaultPros = {
    center:{
        lat:42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map;

