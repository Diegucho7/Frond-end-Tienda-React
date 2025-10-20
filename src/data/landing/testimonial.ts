import team61 from 'assets/img/team/61.webp';
import team8 from 'assets/img/team/8.webp';
import team35 from 'assets/img/team/35.webp';
import team12 from 'assets/img/team/12.webp';
import team13 from 'assets/img/team/13.webp';
import team14 from 'assets/img/team/14.webp';

export type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  occupation: string;
  comment: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: team61,
    rating: 5,
    comment:
      'Brilliant app! Will definitely be my first choice starting from today',
    name: 'Monica Gomez',
    occupation: 'UX designer, Google'
  },
  {
    id: 2,
    avatar: team8,
    rating: 4,
    comment:
      'Excellent to work with and comfortable to customize. This is what I was looking for till the date!',
    name: 'Marc Chiasson',
    occupation: 'UX designer, Adobe'
  },
  {
    id: 3,
    avatar: team35,
    rating: 5,
    comment:
      'Phoenix is all you can ask for. This is a perfect fit for everything you might want to work on!',
    name: 'Axel Barry',
    occupation: 'UX designer, Apple'
  }
];

export const alternateTestimonial: Testimonial[] = [
  {
    id: 1,
    name: 'Johna Austin',
    occupation: 'CEO',
    comment:
      'Amazing theme, excellent support from ThemeWagon with really fast reaction time! Thank you!',
    avatar: team12,
    rating: 5
  },
  {
    id: 2,
    name: 'Monica Gomez',
    occupation: 'Founder',
    comment:
      'An excellent theme with fast support team to aid the development process! Thanks team Phoenix!',
    avatar: team13,
    rating: 4.5
  },
  {
    id: 3,
    name: 'Marc Chiasson',
    occupation: 'CTO',
    comment:
      'Amazing support system with quickest reply and steady communication of the concerned. Really loved working with Phoenix!',
    avatar: team14,
    rating: 4
  }
];
