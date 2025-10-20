import { lazy, Suspense, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Map } from 'mapbox-gl';
import PhoenixLoader from 'components/common/PhoenixLoader';
const Mapbox = lazy(() => import('components/base/MapBox'));

const HotelDetailsDescription = ({ activeKey }: { activeKey: string }) => {
  const mapRef = useRef<Map | null>(null);
  useEffect(() => {
    if (activeKey === 'description') {
      mapRef.current?.resize();
    }
  }, [activeKey]);

  return (
    <>
      <h3 className="mb-3 fw-bold">Description</h3>
      <p className="text-body">
        Welcome to our hotel, an opulent and cozy setting with everything you
        need for a comfortable and happy stay. The city's biggest attractions,
        dining, shopping, and entertainment options are close to our hotel,
        which is situated in a desirable area.
      </p>
      <p className="text-body">
        Your comfort is our top priority when designing our rooms and suites,
        which include soft beds, fine linens, and contemporary conveniences like
        flat-screen TVs, fast internet access, and mini-fridges. Also, each room
        features a sizeable workstation, making it the perfect accommodation for
        business traveler's who need to remain connected and productive.
      </p>
      <div className="p-3 border bg-body-highlight border-translucent rounded-2 d-flex flex-between-center flex-wrap gap-3">
        <h5 className="mb-0">
          <span className="text-body-tertiary fw-normal">
            Number of rooms :
          </span>{' '}
          70
        </h5>
        <h5 className="mb-0">
          <span className="text-body-tertiary fw-normal">
            Number of floors :
          </span>{' '}
          14
        </h5>
        <h5 className="mb-0">
          <span className="text-body-tertiary fw-normal">
            Construction year :
          </span>{' '}
          2018
        </h5>
      </div>
      <Card className="bg-body mt-5">
        <Card.Body>
          <div className="mb-4">
            <Suspense fallback={<PhoenixLoader />}>
              <Mapbox
                mapRef={mapRef}
                className="rounded-2 border border-translucent overflow-hidden w-100"
                style={{ height: 300 }}
                options={{
                  center: [-74.0020158, 40.7228022],
                  zoom: 14,
                  scrollZoom: false
                }}
              />
            </Suspense>
          </div>
          <p className="mb-2 text-body-tertiary text-uppercase">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-body-emphasis me-2"
            />
            Museum
          </p>
          <h5>
            1.5 km <span className="text-body-tertiary fw-normal">from</span>{' '}
            Museum of Liberation War, Dhaka
          </h5>
          <hr className="my-4" />
          <p className="mb-2 text-body-tertiary text-uppercase">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-body-emphasis me-2"
            />
            Historical monument
          </p>
          <h5>
            3.5 km <span className="text-body-tertiary fw-normal">from</span>{' '}
            Lalbagh Kella
          </h5>
        </Card.Body>
      </Card>
    </>
  );
};

export default HotelDetailsDescription;
