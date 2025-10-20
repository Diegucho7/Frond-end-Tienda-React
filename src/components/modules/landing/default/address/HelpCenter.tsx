import {
  faFacebook,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilEnvelope, UilMapMarker, UilPhone } from '@iconscout/react-unicons';
import { Link } from 'react-router';

const HelpCenter = () => {
  return (
    <>
      <h3 className="mb-3">Stay connected</h3>
      <p className="mb-5">
        Stay connected with Phoenix's Help Center. Phoenix is available for your
        necessities at all times.
      </p>
      <div className="d-flex flex-column align-items-center align-items-md-start gap-4">
        <div className="d-flex flex-column flex-md-row gap-2 align-items-center">
          <div className="icon-wrapper shadow-info">
            <UilPhone
              fill='currentColor'
              size={40}
              className="text-primary fs-4 z-1 ms-2"
              data-bs-theme="light"
            />
          </div>
          <div className="flex-1 ms-3">
            <a href="tel:+8714067509" className="link-900">
              (871) 406-7509
            </a>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row gap-2 align-items-center">
          <div className="icon-wrapper shadow-info">
            <UilEnvelope
              fill='currentColor'
              size={40}
              className="text-primary z-1 ms-2"
              data-bs-theme="light"
            />
          </div>
          <div className="flex-1 ms-3">
            <Link
              to="mailto:phoenix@email.com"
              className="fw-semibold text-body"
            >
              phoenix@email.com
            </Link>
          </div>
        </div>
        <div className="mb-6 d-flex flex-column flex-md-row gap-2 align-items-center">
          <div className="icon-wrapper shadow-info">
            <UilMapMarker
              fill='currentColor'
              size={40}
              className="text-primary z-1 ms-2"
              data-bs-theme="light"
            />
          </div>
          <div className="flex-1 ms-3">
            <Link to="#!" className="fw-semibold text-body">
              39163 Amir Drive Suite 802
            </Link>
          </div>
        </div>
        <div className="d-flex gap-3">
          <a href="#!">
            <FontAwesomeIcon icon={faFacebook} className="text-primary fs-6" />
          </a>
          <a href="#!">
            <FontAwesomeIcon icon={faTwitter} className="text-primary fs-6" />
          </a>
          <a href="#!">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-primary fs-6"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
