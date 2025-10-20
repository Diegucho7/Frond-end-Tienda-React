import React from 'react';
import { Link } from 'react-router';
import { HotelImageType } from 'data/travel-agency/customer/hotelDetails';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';
import classNames from 'classnames';

interface HotelDetailsGalleryProps {
  images: HotelImageType[];
  className?: string;
}

interface HotelDetailsGalleryItemProps {
  item: HotelImageType;
  handleClick: () => void;
  isLast: boolean;
}

const DetailsGalleryItem = ({
  item,
  handleClick,
  isLast
}: HotelDetailsGalleryItemProps) => {
  return (
    <div
      className={classNames(item.classNames, 'cursor-pointer')}
      onClick={handleClick}
    >
      {isLast ? (
        <div className="position-relative rounded-2 overflow-hidden">
          <img
            src={item.img}
            alt=""
            className="w-100 h-md-100 object-fit-cover"
            height={43}
          />
          <div className="position-absolute left-0 top-0 w-100 h-100 d-flex flex-center bg-black bg-opacity-50">
            <Link
              to="/apps/travel-agency/hotel/customer/gallery"
              className="text-white stretched-link"
            >
              Show all
            </Link>
          </div>
        </div>
      ) : (
        <img src={item.img} alt="" className="rounded-2 img-fluid" />
      )}
    </div>
  );
};
const HotelDetailsGallery = ({
  images,
  className
}: HotelDetailsGalleryProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    images.map((item: HotelImageType) => item.largeImg)
  );

  return (
    <>
      <div className={classNames(className, 'gap-3 d-grid grid-cols-12')}>
        {images.map((imageItem, index) => (
          <DetailsGalleryItem
            key={imageItem.id}
            item={imageItem}
            handleClick={() => openLightbox(index + 1)}
            isLast={index === images.length - 1}
          />
        ))}
      </div>
      <div>
        <Lightbox {...lightboxProps} />
      </div>
    </>
  );
};

export default HotelDetailsGallery;
