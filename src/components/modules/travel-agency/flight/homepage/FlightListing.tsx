import React from 'react';
import FligthListHead from './FligthListHead';
import qutarAirline from 'assets/img/brand/qatar-airline.png';
import emiratesAirline from 'assets/img/brand/emirates-airline.png';
import japanAirline from 'assets/img/brand/japan-airline.png';
import longArrow from 'assets/img/icons/long-arrow.svg';
import { Col, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import { Link } from 'react-router';
import { currencyFormat } from 'helpers/utils';

interface FlightSchedule {
  departure: {
    from: string;
    date: string;
    time: string;
  };
  arrival: {
    to: string;
    date: string;
    time: string;
  };
  duration: string;
}
interface FlightScheduleProps {
  schedule: FlightSchedule;
}

interface FlightInfo {
  airline: {
    name: string;
    logo: string;
  };
  schedules: FlightSchedule[];
  price: {
    regular: number;
    discounted: number;
  };
}

const FlightsInfo: FlightInfo[] = [
  {
    airline: {
      name: 'Qatar Airways',
      logo: qutarAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: {
          from: 'DAC',
          date: '25 Jan',
          time: '7:45'
        },
        arrival: {
          to: 'CGP',
          date: '25 Jan',
          time: '8:10'
        }
      },
      {
        duration: '25m',
        departure: {
          from: 'CGP',
          date: '27 Jan',
          time: '8:15'
        },
        arrival: {
          to: 'DAC',
          date: '27 Jan',
          time: '8:45'
        }
      }
    ],
    price: {
      regular: 150,
      discounted: 124
    }
  },
  {
    airline: {
      name: 'Emirates',
      logo: emiratesAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: {
          from: 'DAC',
          date: '25 Jan',
          time: '7:55'
        },
        arrival: {
          to: 'ZYL',
          date: '25 Jan',
          time: '8:20'
        }
      }
    ],
    price: {
      regular: 139,
      discounted: 120
    }
  },
  {
    airline: {
      name: 'Japan Airlines',
      logo: japanAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: {
          from: 'DAC',
          date: '25 Jan',
          time: '8:45'
        },
        arrival: {
          to: 'ZYL',
          date: '25 Jan',
          time: '9:10'
        }
      }
    ],
    price: {
      regular: 144,
      discounted: 128
    }
  },
  {
    airline: {
      name: 'Qatar Airways',
      logo: qutarAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: {
          from: 'DAC',
          date: '25 Jan',
          time: '8:55'
        },
        arrival: {
          to: 'ZYL',
          date: '25 Jan',
          time: '9:15'
        }
      }
    ],
    price: {
      regular: 150,
      discounted: 124
    }
  }
];

const FlightSchedule = ({ schedule }: FlightScheduleProps) => {
  return (
    <div className="d-flex gap-4 justify-content-center">
      <div>
        <p className="mb-2 fs-9 text-body-tertiary">
          {schedule.departure.date}
        </p>
        <h4 className="mb-2 text-body">{schedule.departure.from}</h4>
        <h2 className="mb-0">{schedule.departure.time}</h2>
      </div>
      <div className="text-center">
        <p className="mb-2 fs-9 text-body-tertiary">{schedule.duration}</p>
        <p className="mb-2 fs-9 text-body-tertiary">Non-stop</p>
        <img src={longArrow} alt="" className="position-relative rtl__flip" />
      </div>
      <div className="text-end">
        <p className="mb-2 fs-9 text-body-tertiary">{schedule.arrival.date}</p>
        <h4 className="mb-2 text-body">{schedule.arrival.to}</h4>
        <h2 className="mb-0">{schedule.arrival.time}</h2>
      </div>
    </div>
  );
};

const FlightItem = ({ airline, schedules, price }: FlightInfo) => {
  return (
    <Row className="g-0 gap-6 align-items-center py-7 border-top">
      <Col lg>
        <div className="d-flex flex-column gap-md-3 gap-6">
          {schedules.map((schedule, idx) => (
            <Row
              key={idx}
              className="gy-md-0 gy-4 justify-content-sm-between justify-content-lg-start"
            >
              <Col sm="auto" md={5}>
                <div className="d-flex flex-center justify-content-sm-start gap-4">
                  <img
                    src={airline.logo}
                    alt=""
                    className="flight-list-item-logo img-fluid rounded-3"
                  />
                  <h5 className="d-none d-md-block text-nowrap text-body-highlight">
                    {airline.name}
                  </h5>
                </div>
              </Col>
              <Col sm="auto">
                <FlightSchedule schedule={schedule} />
              </Col>
            </Row>
          ))}
        </div>
      </Col>
      <Col lg="auto">
        <div className="d-flex gap-3 flex-column flex-sm-row flex-lg-column flex-xl-row flex-end-center">
          <h3 className="mb-0 fs-5 fs-sm-6 d-flex gap-2 flex-column flex-sm-row align-items-center">
            <span className="fs-9 text-body-quaternary fw-normal text-decoration-line-through">
              {currencyFormat(price.regular, { minimumFractionDigits: 2 })}
            </span>
            {currencyFormat(price.discounted, { minimumFractionDigits: 2 })}
          </h3>

          <Link to="/apps/travel-agency/flight/booking">
            <Button variant="primary" className="px-9">
              Select
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

const FlightListing = () => {
  return (
    <>
      <FligthListHead />
      {FlightsInfo.map((flight, idx) => (
        <FlightItem key={idx} {...flight} />
      ))}
      <div className="mt-4 position-relative text-center">
        <hr className="m-0 position-absolute top-50 translate-middle-y w-100" />
        <Button
          variant="phoenix-secondary"
          className="rounded-pill position-relative"
        >
          Show more
        </Button>
      </div>
    </>
  );
};

export default FlightListing;
