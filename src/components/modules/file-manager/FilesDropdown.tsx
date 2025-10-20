import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Dropdown } from 'react-bootstrap';

const dropdownItems: string[] = [
  'Share',
  'Download',
  'Duplicate',
  'Move',
  'Rename',
  'Move to Bin',
  'Delete'
];

const FilesDropdown = ({
  className = 'position-static',
  toggleClass = ''
}: {
  className?: string;
  toggleClass?: string;
}) => {
  return (
    <>
      <Dropdown className={className}>
        <Dropdown.Toggle
          variant=""
          className={`btn-square-sm position-relative dropdown-caret-none z-1 ${toggleClass}`}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </Dropdown.Toggle>
        <Dropdown.Menu className="py-2" style={{ zIndex: 6 }}>
          {dropdownItems.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx < dropdownItems.length - 1 ? (
                <Dropdown.Item
                  href="#!"
                  className="fw-semibold text-decoration-none"
                >
                  {item}
                </Dropdown.Item>
              ) : (
                <>
                  <hr className="dropdown-divider" />
                  <Dropdown.Item
                    href="#!"
                    className="fw-semibold text-decoration-none text-danger"
                  >
                    Delete
                  </Dropdown.Item>
                </>
              )}
            </React.Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilesDropdown;
