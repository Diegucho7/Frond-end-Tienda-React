import React, { useRef } from 'react';
import { GalleryItemType } from 'data/travel-agency/customer/gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

interface HotelGalleryItemProps {
  galleryItem: GalleryItemType;
  onClick: () => void;
}

const HotelGalleryItem = ({ galleryItem, onClick }: HotelGalleryItemProps) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    ref.current?.play();
  };

  const handleMouseOut = () => {
    ref.current?.pause();
  };
  return (
    <div
      className={classNames(galleryItem.classNames, 'cursor-pointer')}
      onClick={onClick}
    >
      {galleryItem.video ? (
        <div className="video-container position-relative h-100">
          <video
            className="w-100 h-100 object-fit-cover overflow-hidden rounded-2"
            src={galleryItem.video}
            muted
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
            ref={ref}
          />
          <div className="video-icon position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
            <FontAwesomeIcon icon={faVideo} />
          </div>
        </div>
      ) : (
        <img
          src={galleryItem.img}
          alt=""
          className="rounded-2 h-100 w-100 object-fit-cover"
        />
      )}
    </div>
  );
};

export default HotelGalleryItem;
