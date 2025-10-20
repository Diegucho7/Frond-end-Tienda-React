import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gallery51 from 'assets/img/gallery/51.png';
import gallery52 from 'assets/img/gallery/52.png';
import gallery53 from 'assets/img/gallery/53.png';
import gallery54 from 'assets/img/gallery/54.png';
import gallery55 from 'assets/img/gallery/55.png';
import gallery56 from 'assets/img/gallery/56.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
interface photos {
  img: string;
  location: string;
}
const photos: photos[] = [
  {
    img: gallery51,
    location: 'Bali Indonesia'
  },
  {
    img: gallery52,
    location: 'Barcelona'
  },
  {
    img: gallery53,
    location: 'Bali Indonesia'
  },
  {
    img: gallery54,
    location: 'Sydney'
  },
  {
    img: gallery55,
    location: 'Great Barrier Reef'
  },
  {
    img: gallery56,
    location: 'Grand Canyon'
  }
];

const LatestPhotos = () => {
  return (
    <section className="pb-7 pt-0">
      <div className="container-medium">
        <div className="text-center mb-5">
          <h3 className="mb-2 text-body-emphasis">
            Latest photos from tourists
          </h3>
          <p className="mb-0 text-body-tertiary">
            See how our tourists enjoyed their trip from images captured by them
            with Team Phoenix!
          </p>
        </div>
        <Row className="g-3">
          {photos.map((item, index) => (
            <Col md={6} xl={4} key={index}>
              <div className="img-zoom-hover position-relative h-100 rounded-3 overflow-hidden">
                <Link to="#!">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={item.img}
                    alt=""
                  />
                </Link>
                <div className="backdrop-faded">
                  <Link
                    to="#!"
                    className="w-semibold mb-0 text-secondary-lighter stretched-link"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-secondary-lighter me-2"
                    />
                    {item.location}
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default LatestPhotos;
