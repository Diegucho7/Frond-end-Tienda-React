import React from 'react';
import type { UploadedImage } from 'data/travel-agency/customer/trip';
import useLightbox from 'hooks/useLightbox';
import Lightbox from 'components/base/LightBox';

interface TripDetailsReviewTabCommentUploadProps {
  uploadedCommentImage: UploadedImage[];
}

const TripDetailsReviewTabCommentUpload = ({
  uploadedCommentImage
}: TripDetailsReviewTabCommentUploadProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    uploadedCommentImage.map(src => src.largeImg)
  );
  return (
    <>
      {uploadedCommentImage.map((upload, index) => (
        <div
          key={upload.id}
          onClick={() => openLightbox(index + 1)}
          className="cursor-pointer"
        >
          <img src={upload.image} alt="" />
        </div>
      ))}
      <Lightbox {...lightboxProps} />
    </>
  );
};

export default TripDetailsReviewTabCommentUpload;
