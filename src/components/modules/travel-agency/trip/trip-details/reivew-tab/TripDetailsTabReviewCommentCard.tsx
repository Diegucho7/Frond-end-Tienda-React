import React from 'react';
import type { Comment } from 'data/travel-agency/customer/trip';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import GenerateStar from 'components/common/GenerateStar';
import TripDetailsReviewTabCommentUpload from 'components/image-gallery/TripDetailsReviewTabCommentUpload';

interface TripDetailsTabReviewCommentCardProps {
  comments: Comment[];
}

const TripDetailsTabReviewCommentCard = ({
  comments
}: TripDetailsTabReviewCommentCardProps) => {
  return (
    <>
      {comments.map((comment, index) => (
        <Card
          key={comment.id}
          className={classNames('bg-transparent', {
            'mb-3': index !== comments.length - 1
          })}
        >
          <Card.Body>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2 position-relative">
                <Avatar src={comment.profilePic} size="s" rounded="circle" />
                <Link
                  to="#!"
                  className="stretched-link fw-semibold text-body-emphasis"
                >
                  {comment.commenter}
                </Link>
              </div>
              <div className="d-flex gap-2">
                <h6 className="text-body-tertiary mb-0">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-body-quaternary  me-1"
                  />
                  {comment.liked}
                </h6>
                <h6 className="text-body-tertiary dark__ mb-0">
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="text-body-quaternary me-1"
                  />
                  {comment.disliked}
                </h6>
              </div>
            </div>
            <div className="d-flex my-3">
              <GenerateStar
                filledStars={comment.rate}
                className="me-1 fs-9"
                emptyVariant="text-warning-light"
              />
            </div>
            <h4 className="mb-2">{comment.commentTitle}</h4>
            <p className="text-body-tertiary">{comment.commentDate}</p>
            <p>{comment.commentDes}</p>
            {comment.uploadedImage && (
              <div className="d-flex flex-wrap gap-2">
                <TripDetailsReviewTabCommentUpload
                  uploadedCommentImage={comment.uploadedImage}
                />
              </div>
            )}
            {comment.replies.map((replyItem, idx) => (
              <div
                key={replyItem.id}
                className={classNames(
                  'mt-5 border-start border-translucent ps-4',
                  {
                    'mt-5': idx === 0,
                    'mb-3': idx !== comment.replies.length - 1
                  }
                )}
              >
                <Link to="#!" className="fw-bold">
                  {replyItem.replier}
                </Link>
                <span className="text-body-quaternary"> replied</span>
                <p className="mt-2">{replyItem.reply}</p>
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default TripDetailsTabReviewCommentCard;
