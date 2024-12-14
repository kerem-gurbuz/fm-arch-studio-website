import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';

import type { Office } from '../types';
import { MarkerShape } from './marker-shape';

type MarkerWithInfoWindowProps = {
  office: Office;
};

export function MarkerWithInfoWindow({ office }: MarkerWithInfoWindowProps) {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infoWindow.
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infoWindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    [],
  );

  // if the maps api closes the infoWindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={office.location}
        onClick={handleMarkerClick}
      >
        <MarkerShape aria-label={office.name} className="h-[49px] w-[40px]" />
      </AdvancedMarker>
      {infoWindowShown && (
        <InfoWindow
          ariaLabel={office.name}
          anchor={marker}
          onClose={handleClose}
          headerContent={
            <h3 className="font-league-spartan text-base font-bold">
              {office.name}
            </h3>
          }
        >
          <div className="font-league-spartan text-sm">
            <p>Mail : {office.email}</p>
            <p>Address : {office.address}</p>
            <p>Phone : {office.phone}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
}
