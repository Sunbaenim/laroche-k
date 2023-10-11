import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';
import mapAreas from '../assets/map-areas.json';

function Map() {

    const redOptions = { color: 'red' };
    const setColor = ({ properties }) => {
        return { weight: 1 };
      };

    return(
        <MapContainer center={[50.635, 5.45]} zoom={11}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={mapAreas} style={setColor} pathOptions={redOptions} />
        </MapContainer>
    );
}

export default Map;
