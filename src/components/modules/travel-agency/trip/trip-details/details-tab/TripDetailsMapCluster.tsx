import { lazy, Suspense } from 'react';
import { useAppContext } from 'providers/AppProvider';
import { useMemo } from 'react';
import { CircleLayer, SymbolLayer } from 'mapbox-gl';
import PhoenixLoader from 'components/common/PhoenixLoader';
const MapboxCluster = lazy(() => import('components/base/MapBoxCluster'));

const getMapData = (getThemeColor: (name: string) => string) => {
  return [
    {
      id: 'clusters',
      type: 'circle',
      source: 'earthquakes',
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': [
          'step',
          ['get', 'point_count'],
          getThemeColor('secondary'),
          100,
          getThemeColor('info'),
          750,
          getThemeColor('warning')
        ],
        'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
      }
    } as CircleLayer,
    {
      id: 'cluster-count',
      type: 'symbol',
      source: 'earthquakes',
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      },
      paint: {
        'text-color': getThemeColor('white')
      }
    } as SymbolLayer,
    {
      id: 'unclustered-point',
      type: 'circle',
      source: 'earthquakes',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-color': getThemeColor('primary-light'),
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': getThemeColor('emphasis-bg')
      }
    } as CircleLayer
  ];
};

const TripDetailsMapCluster = () => {
  const { getThemeColor } = useAppContext();
  const mapData = useMemo(() => {
    return getMapData(getThemeColor);
  }, [getThemeColor]);
  return (
    <>
      <Suspense fallback={<PhoenixLoader />}>
        <MapboxCluster
          className="border border-translucent rounded-2"
          mapData={mapData}
          options={{
            center: [-73.102712, 7.102257],
            zoom: 3.5,
            pitch: 40,
            attributionControl: false
          }}
          style={{
            height: 240
          }}
        />
      </Suspense>
    </>
  );
};

export default TripDetailsMapCluster;
