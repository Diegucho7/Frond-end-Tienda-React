import { faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import { Comment } from 'data/social/postsData';
import React from 'react';
import { Link } from 'react-router';

interface PostCommentsProps {
  comments: Comment[];
}

const PostComments = ({ comments }: PostCommentsProps) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} className="d-flex align-items-start">
          <Link to="/apps/social/profile">
            <Avatar size="m" src={comment.avatar} className="me-2" />
          </Link>
          <div className="flex-1">
            <div className="d-flex align-items-center">
              <Link
                to="/apps/social/profile"
                className="fw-bold mb-0 text-body-emphasis"
              >
                {comment.name}
              </Link>
              <span className="text-body-tertiary text-opacity-85 fw-semibold fs-10 ms-2">
                {comment.time}
              </span>
            </div>
            <p className="mb-0">{comment.comment}</p>
            {comment.reply && (
              <div className="mb-3">
                <Button
                  variant="link"
                  className="p-0 text-body mb-2 fs-10"
                  startIcon={
                    <FontAwesomeIcon icon={faReply} className="me-1" />
                  }
                >
                  Reply
                </Button>
                <PostComments comments={comment.reply} />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default PostComments;
