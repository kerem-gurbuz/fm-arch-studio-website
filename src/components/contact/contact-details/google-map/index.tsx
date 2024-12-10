import { APIProvider, ColorScheme, Map } from '@vis.gl/react-google-maps';

import { env } from '@/config/env';
import { OFFICES } from '../constants';
import { MapControl } from './map-control';
import { MarkerWithInfoWindow } from './marker-with-info-window';

const MAP_ID = 'DEMO_MAP_ID';
const DEFAULT_ZOOM = 6;
const DEFAULT_CENTER: google.maps.LatLngLiteral = {
  lat: 34.0522,
  lng: -90.0,
};

type GoogleMapProps = {
  className?: string;
};

export function GoogleMap({ className }: GoogleMapProps) {
  if (!env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) return null;

  return (
    <APIProvider apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Map
        mapId={MAP_ID}
        className={className}
        colorScheme={ColorScheme.LIGHT}
        defaultZoom={DEFAULT_ZOOM}
        defaultCenter={DEFAULT_CENTER}
        streetViewControl={false}
      >
        <MapControl />
        {OFFICES.map((office) => (
          <MarkerWithInfoWindow key={office.id} office={office} />
        ))}
      </Map>
    </APIProvider>
  );
}
