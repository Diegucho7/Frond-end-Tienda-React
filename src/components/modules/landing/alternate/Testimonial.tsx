import AlternateTestimonialCarousel from 'components/sliders/AlternateTestimonialCarousel';
import React from 'react';

const Testimonial = () => {
  return (
    <section className="pb-14 overflow-x-hidden">
      <div className="container-small px-lg-7 px-xxl-3">
        <div className="text-center mb-5 position-relative">
          <h5 className="text-info mb-3">Testimonial</h5>
          <h2 className="mb-2 lh-base">
            What our customers has to say about us
          </h2>
        </div>
        <AlternateTestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonial;
