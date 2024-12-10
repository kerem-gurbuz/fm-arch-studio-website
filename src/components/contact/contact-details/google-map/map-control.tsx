import {
  ControlPosition,
  MapControl as GoogleMapControl,
  useMap,
} from '@vis.gl/react-google-maps';
import { MapPinHouseIcon, MapPinIcon } from 'lucide-react';
import React, { useCallback } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { OFFICES } from '../constants';

export function MapControl() {
  const map = useMap();

  const handleClick = useCallback(
    (latLng: google.maps.LatLngLiteral) => {
      if (!map) return;
      map.panTo(latLng);
    },
    [map],
  );

  return (
    <GoogleMapControl position={ControlPosition.RIGHT_CENTER}>
      <div className="mr-[10px] flex flex-col items-center bg-white">
        {OFFICES.map((office, index) => (
          <React.Fragment key={office.id}>
            {/* Office Marker */}
            <Button
              aria-label={office.name}
              className="group relative h-10 w-10 bg-white p-0 hover:bg-white"
              onClick={() => handleClick(office.location)}
            >
              {office.id === 'main-office' ? (
                <MapPinHouseIcon className="pointer-events-none h-6 w-6 stroke-[#565656] group-hover:stroke-black" />
              ) : (
                <MapPinIcon className="pointer-events-none h-6 w-6 stroke-[#565656] group-hover:stroke-black" />
              )}
              {/* Tooltip */}
              <span
                aria-hidden
                className={cn(
                  'absolute -left-1 top-1/2 -translate-x-full -translate-y-1/2',
                  'inline-block border border-border bg-black px-2 py-1 text-xs text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                )}
              >
                {office.name}
              </span>
            </Button>
            {/* Decorative Divider Line */}
            {index !== OFFICES.length - 1 && (
              <div className="h-[1px] w-[30px] bg-[#E6E6E6]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </GoogleMapControl>
  );
}
