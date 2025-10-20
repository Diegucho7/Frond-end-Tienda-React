import { blogs } from 'data/landing/alternate-landing-data';
import { Col, Row } from 'react-bootstrap';
import BlogItem from './BlogItem';

const Blogs = () => {
  return (
    <section id="blog" className="pt-10">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-5 mb-8">
          <h5 className="text-info mb-3">Blogs</h5>
          <h2 className="mb-2">Our most viewed articles</h2>
        </div>
        <Row className="gx-3 gy-7">
          {blogs.map(blog => (
            <Col key={blog.id} lg={4}>
              <BlogItem blog={blog} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Blogs;
