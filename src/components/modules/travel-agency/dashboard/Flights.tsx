import TravelFlightTable from 'components/tables/TravelFlightTable';
import FlightMap from './FlightMap';

const Flights = () => {
  return (
    <>
      <TravelFlightTable />
      <FlightMap
        options={{
          center: [-73.102712, 7.102257],
          zoom: 5
        }}
      />
    </>
  );
};

export default Flights;
