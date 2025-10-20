import {
  faAngleRight,
  faComment,
  faEye,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import { Blog } from 'data/landing/alternate-landing-data';

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt="" className="w-100 rounded-3" />
      <div className="d-flex align-items-cente mt-3">
        <Button
          variant="link"
          href="#!"
          className="text-decoration-none text-body-secondary d-flex align-items-center me-3 fs-10 p-0"
          startIcon={<FontAwesomeIcon icon={faEye} className="fs-9" />}
        >
          {blog.views}
        </Button>
        <Button
          variant="link"
          href="#!"
          className="text-decoration-none text-body-secondary d-flex align-items-center me-3 fs-10 p-0"
          startIcon={<FontAwesomeIcon icon={faHeart} className="fs-9" />}
        >
          {blog.like}
        </Button>
        <Button
          variant="link"
          href="#!"
          className="text-decoration-none text-body-secondary d-flex align-items-center fs-10 p-0"
          startIcon={<FontAwesomeIcon icon={faComment} className="fs-9" />}
        >
          {blog.comments}
        </Button>
      </div>
      <Badge bg="primary" className="mb-2 mt-4">
        {blog.category}
      </Badge>
      <h4 className="mb-3 pe-sm-5 lh-lg">{blog.title}</h4>
      <Button
        variant="link"
        className="px-0 d-flex align-items-center fs-9 fw-bold"
        endIcon={<FontAwesomeIcon icon={faAngleRight} />}
      >
        See more
      </Button>
    </div>
  );
};

export default BlogItem;
