/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { HTMLAttributes, useEffect, useRef } from 'react';
import mapboxgl, { LngLatLike, Map, MapboxOptions } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppContext } from 'providers/AppProvider';
// @ts-ignore
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker?worker';
import {
  faCircle,
  faMinus,
  faPlane,
  faPlus,
  faUpRightAndDownLeftFromCenter
} from '@fortawesome/free-solid-svg-icons';
import FlightTable from './FlightTable';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import { Autoplay } from 'swiper/modules';
import { Feature, along, length, LineString } from '@turf/turf';
import { routes } from 'data/travel-agency/travelAgency';
import { rgbaColor } from 'helpers/utils';

interface MapboxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  options: Omit<MapboxOptions, 'container'>;
}
interface pointInterface {
  type: string;
  features: {
    type: string;
    properties: object;
    geometry: {
      type: string;
      coordinates: LngLatLike;
    };
  }[];
}

interface Destination {
  type: string;
  features: Feature[];
}
interface Destination2 {
  type: string;
  features: Feature<LineString>[];
}

SwiperCore.use([Autoplay]);
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';
// @ts-ignore
mapboxgl.workerClass = MapboxWorker;

const FlightMap = ({ options, ...rest }: MapboxProps) => {
  const flightMap = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);
  const {
    config: { isDark },
    getThemeColor
  } = useAppContext();

  const styles = {
    default: 'mapbox://styles/mapbox/light-v11',
    auto: isDark
      ? 'mapbox://styles/themewagon/cljzg9juf007x01pk1bepfgew'
      : 'mapbox://styles/themewagon/clj57pads001701qo25756jtw',
    light: 'mapbox://styles/themewagon/clj57pads001701qo25756jtw',
    dark: 'mapbox://styles/themewagon/cljzg9juf007x01pk1bepfgew'
  };

  const {
    config: { theme }
  } = useAppContext();

  const origin: LngLatLike = [-61.100583, 5.044713];
  const currentPosition: LngLatLike = [-74.2139449434892, 8.136553550752552];
  const destination: LngLatLike = [-84.913785, 10.325774];

  const originToCurrentRoute: Destination = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [origin, currentPosition]
        }
      }
    ]
  };
  const originToCurrentRoute2: Destination2 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [origin, currentPosition]
        }
      }
    ]
  };

  const currentToDestinationRoute: Destination = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [currentPosition, destination]
        }
      }
    ]
  };

  const currentToDestinationRoute2: Destination2 = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [currentPosition, destination]
        }
      }
    ]
  };

  const points: pointInterface = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: origin
        }
      },
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: currentPosition
        }
      },
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: destination
        }
      }
    ]
  };
  const lineDistance = length(originToCurrentRoute.features[0]);
  const lineDistance2 = length(originToCurrentRoute.features[0]);

  const arc = [];
  const arc2 = [];
  const steps = 500;

  for (let i = 0; i < lineDistance; i += lineDistance / steps) {
    const segment = along(originToCurrentRoute2.features[0], i);
    arc.push(segment.geometry.coordinates);
  }
  for (let i = 0; i < lineDistance2; i += lineDistance2 / steps) {
    const segment = along(currentToDestinationRoute2.features[0], i);
    arc2.push(segment.geometry.coordinates);
  }

  const mapLayers = (mapCurrent: mapboxgl.Map | null) => {
    mapCurrent?.addSource('route', {
      type: 'geojson',
      //@ts-ignore
      data: originToCurrentRoute.features[0]
    });

    mapCurrent?.addSource('route2', {
      type: 'geojson',
      //@ts-ignore
      data: currentToDestinationRoute.features[0]
    });

    mapCurrent?.addLayer({
      id: 'route',
      source: 'route',
      type: 'line',
      paint: {
        'line-width': 2,
        'line-color': rgbaColor(getThemeColor('primary'), 0.8)
      }
    });
    mapCurrent?.addLayer({
      id: 'route2',
      source: 'route2',
      type: 'line',
      paint: {
        'line-color': getThemeColor('warning')
      }
    });
  };

  useEffect(() => {
    if (map.current) return;
    if (flightMap.current) {
      map.current = new mapboxgl.Map({
        container: flightMap.current,
        style: styles[theme],
        pitch: 40,
        attributionControl: false,
        ...options
      });

      let count = 1;
      points.features.forEach(feature => {
        const el = document.createElement('div');
        el.className = `marker-${count}`;
        if (map.current) {
          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .addTo(map.current);
        }
        count += 1;
      });

      map.current.on('load', () => {
        mapLayers(map.current);
      });
      map.current.on('style.load', () => {
        mapLayers(map.current);
      });
    }
  }, []);

  const handleFullScreen = () => {
    map.current?.getContainer().requestFullscreen();
    setTimeout(() => {
      map.current?.resize();
    }, 100);
  };

  useEffect(() => {
    map.current?.setStyle(styles[theme]);
  }, [theme]);

  return (
    <>
      <div className="mapbox-container flight-map mt-4" {...rest}>
        <div className="position-relative">
          <div
            ref={flightMap}
            id="flightMap"
            className="map rounded-3 mapboxgl-map"
          />

          <div className="mapbox-control-btn flight-map-control-btn">
            <Button
              onClick={() => map.current?.zoomIn()}
              className="zoomIn d-none d-md-block"
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <Button
              onClick={() => map.current?.zoomOut()}
              className="zoomOut d-none d-md-block"
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
            <Button
              onClick={handleFullScreen}
              className="zoomOut rounded mt-md-3"
            >
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
            </Button>
          </div>
        </div>

        <div className="position-absolute top-0 w-100 mt-3 mt-md-5 px-3 px-md-5 px-xl-7">
          <div
            className="d-flex align-items-center bg-secondary overflow-hidden rounded-1"
            style={{ height: 46 }}
          >
            <div className="h-100 px-3 d-flex align-items-center bg-danger-subtle position-relative">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-danger me-md-2"
              />
              <h3 className="mb-0 fw-bold text-nowrap d-none d-md-block">
                Live Tracking
              </h3>
            </div>
            <div className="swiper-theme-container">
              <Swiper
                wrapperClass="swiper-continuous-autoplay"
                loop={true}
                spaceBetween={40}
                centeredSlides={true}
                slidesPerView="auto"
                speed={4000}
                autoplay={{
                  delay: 0
                }}
                grabCursor={true}
              >
                {routes.map((route, index) => (
                  <SwiperSlide key={index} className="w-auto">
                    <div className="d-flex align-items-center">
                      <h6 className="px-3 py-2 bg-primary-subtle mb-0 fs-10 rounded-1 me-2">
                        {route.flightNo}
                      </h6>
                      <img
                        className="me-1"
                        src={route.logo}
                        alt=""
                        width={16}
                      />
                      <h6 className="mb-0 text-white fw-semibold me-3 text-nowrap">
                        {route.airLine}
                      </h6>
                      <h6 className="mb-0 fw-semibold text-white">
                        {route.from}
                      </h6>
                      <FontAwesomeIcon
                        icon={faPlane}
                        className="text-primary mx-2"
                      />
                      <h6 className="mb-0 fw-semibold text-white border-end pe-6">
                        {route.to}
                      </h6>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <FlightTable />
      </div>
    </>
  );
};

export default FlightMap;
