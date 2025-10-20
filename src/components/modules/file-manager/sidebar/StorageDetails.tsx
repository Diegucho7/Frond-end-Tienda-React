import React, { useState } from 'react';
import { Collapse, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router';
import classNames from 'classnames';
import spotIllustration45 from 'assets/img/spot-illustrations/45.png';
import spotIllustrationDark45 from 'assets/img/spot-illustrations/dark_45.png';

import {
  faChevronRight,
  faFile,
  faFilePdf,
  faMusic,
  faRectangleList,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
const categories = [
  {
    category: 'Images',
    count: '22k',
    storage: '13GB',
    icon: faFilePdf,
    type: 'primary'
  },
  {
    category: 'Videos',
    count: '534',
    storage: '8.3GB',
    icon: faVideo,
    type: 'info'
  },
  {
    category: 'Audio',
    count: '55',
    storage: '4GB',
    icon: faMusic,
    type: 'warning'
  },
  {
    category: 'Documents',
    count: '65k',
    storage: '15.5GB',
    icon: faFile,
    type: 'danger'
  },
  {
    category: 'Others',
    count: '12k',
    storage: '5GB',
    icon: faRectangleList,
    type: 'success'
  }
];

const StorageDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Link
        to="#!"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          'collapse-indicator px-0 py-3 mt-3 d-flex flex-between-center text-decoration-none',
          {
            collapsed: !isOpen
          }
        )}
      >
        <h5 className="mb-0 text-body-highlight">Storage details</h5>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`toggle-icon text-primary`}
        />
      </Link>
      <ProgressBar style={{ height: '10px' }}>
        <ProgressBar variant="primary-light" now={20} key={1} />
        <ProgressBar variant="info-lighter" now={16} key={2} />
        <ProgressBar variant="warning-lighter" now={18} key={3} />
        <ProgressBar variant="danger-lighter" now={12} key={4} />
        <ProgressBar variant="success-lighter" now={11} key={5} />
      </ProgressBar>
      <h6 className="text-body mt-2 mb-0">Used: 45.8 GB (92%) of the 50 GB.</h6>

      <Collapse in={isOpen}>
        <div>
          <div className="pt-4">
            {categories.map((item, index) => (
              <div
                key={index}
                className={`d-flex align-items-center gap-2 ${
                  index !== categories.length - 1 ? 'mb-3' : ''
                }`}
              >
                <div className={`square-icon-box bg-${item.type}-subtle`}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-${item.type}-darker`}
                  />
                </div>
                <div>
                  <h6 className="text-body">{item.category}</h6>
                  <h6 className="mb-0 text-body fw-semibold">
                    {item.count} Files - {item.storage} Used
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Collapse>
      <hr className="my-4" />
      <div className="text-center">
        <img
          src={spotIllustration45}
          className="d-dark-none"
          alt=""
          width="98"
        />
        <img
          src={spotIllustrationDark45}
          className="d-light-none"
          alt=""
          width="98"
        />
        <h5 className="mt-3 text-body fw-bolder">Upgrade to Pro</h5>
        <h6 className="mb-3 text-body-tertiary fw-normal">
          Expand your storage capacity with our upgraded storage options.
        </h6>
        <Button variant="primary" size="sm" className="w-100">
          Upgrade Now
        </Button>
      </div>
    </>
  );
};

export default StorageDetails;
