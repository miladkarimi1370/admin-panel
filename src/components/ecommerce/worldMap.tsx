import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression, LatLngTuple } from "leaflet"; // LatLngTuple اضافه شد
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// تنظیم آیکون پیش‌فرض
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function TopCountriesMap() {

    const mapCenter: LatLngExpression = [40.7128, -74.006];

    // تغییر تایپ به LatLngTuple برای اینکه مطمئن باشیم آرایه اعداد است
    const positions: LatLngTuple[] = [
        [40.70598512312415, -74.00890462395118],
        [40.76713693526539, -73.91872445116364],
        [12.97228157805932, 77.60730255349117],
        [51.50662390983401, -0.08855144942358086],
        [41.036665805090024, 28.98497407988761],
    ];

    const cities = ["New York 1", "New York 2", "Bangalore", "London", "Istanbul"];

    return (

        <MapContainer
            bounds={positions}
            scrollWheelZoom={false}
            
            className="h-[40vh] sm:h-[50vh] base:h-[55vh] lg:h-[60vh] xl:h-[70vh] w-full"
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {positions.map((pos, index) => (
                <Marker key={index} position={pos}>
                    <Popup>
                        {cities[index] || `موقعیت ${index + 1}`} <br />
                        مختصات: {pos[0].toFixed(4)}, {pos[1].toFixed(4)}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );


}
