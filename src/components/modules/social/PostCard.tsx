import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import CommentField from 'components/modules/social/CommentField';
import PostComments from 'components/modules/social/PostComments';
import PostGallery from 'components/image-gallery/PostGallery';
import { Post } from 'data/social/postsData';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import {
  faCircle,
  faComment,
  faEarthAmericas,
  faHeart,
  faShare
} from '@fortawesome/free-solid-svg-icons';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="mb-5">
      <Card className="mb-4 overflow-hidden">
        <Card.Body className="p-3 p-sm-4">
          <div className="border-bottom border-translucent mb-3">
            <div className="d-flex align-items-center mb-3">
              <Link to="/apps/social/profile" style={{ lineHeight: 0 }}>
                <Avatar size="xl" src={post.author.avatar} className="me-2" />
              </Link>
              <div className="flex-1">
                <Link to="/apps/social/profile" className="fw-bold mb-0">
                  {post.author.name}
                </Link>
                <p className="fs-10 mb-0 text-body-tertiary text-opacity-85 fw-semibold">
                  {post.time}
                  {post.location && (
                    <>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-light"
                        transform="shrink-10 down-2"
                      />
                      {post.location}
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="text-light"
                        transform="shrink-10 down-2"
                      />
                      <FontAwesomeIcon
                        icon={faEarthAmericas}
                        className="text-body"
                      />
                    </>
                  )}
                </p>
              </div>
              <RevealDropdownTrigger>
                <RevealDropdown>
                  <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                  <Dropdown.Item eventKey="2" className="text-danger">
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Download</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Report abuse</Dropdown.Item>
                </RevealDropdown>
              </RevealDropdownTrigger>
            </div>
            <p className="text-body-secondary">{post.caption}</p>
            {post.images && <PostGallery images={post.images} />}
          </div>
          <div className="d-flex">
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon={faHeart} />}
              className="p-0 me-3 fs-10 fw-bolder"
            >
              {post.interactions.likes} Likes
            </Button>
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon={faComment} />}
              className="p-0 me-3 fs-10 fw-bolder text-body"
            >
              {post.interactions.comments} Comments
            </Button>
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon={faShare} />}
              className="p-0 me-3 fs-10 fw-bolder text-body"
            >
              {post.interactions.shares} Shares
            </Button>
          </div>
        </Card.Body>
        <div className="bg-body-highlight border-top border-translucent p-3 p-sm-4">
          {post.comments && <PostComments comments={post.comments} />}
          <CommentField />
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
