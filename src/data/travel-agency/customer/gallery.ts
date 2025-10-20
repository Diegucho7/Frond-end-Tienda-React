import thumb1 from 'assets/img/hotels/74.png';
import thumb2 from 'assets/img/hotels/75.png';
import thumb3 from 'assets/img/hotels/76.png';
import thumb4 from 'assets/img/hotels/78.png';
import thumb5 from 'assets/img/hotels/79.png';
import thumb6 from 'assets/img/hotels/80.png';
import thumb7 from 'assets/img/hotels/81.png';
import thumb8 from 'assets/img/hotels/82.png';
import thumb9 from 'assets/img/hotels/83.png';
import img1 from 'assets/img/hotels/84.jpg';
import img2 from 'assets/img/hotels/85.jpg';
import img3 from 'assets/img/hotels/86.jpg';
import vid1 from 'assets/img/hotels/77.mp4';
import img4 from 'assets/img/hotels/87.jpg';
import img5 from 'assets/img/hotels/88.jpg';
import img6 from 'assets/img/hotels/89.jpg';
import img7 from 'assets/img/hotels/90.jpg';
import img8 from 'assets/img/hotels/91.jpg';
import img9 from 'assets/img/hotels/92.jpg';

export interface GalleryItemType {
  id: number;
  img?: string;
  largeImg?: string;
  video?: string;
  classNames: string;
}

export const galleryItems: GalleryItemType[] = [
  {
    id: 1,
    img: thumb1,
    largeImg: img1,
    classNames: 'col-span-12 col-span-md-6 row-span-md-1'
  },
  {
    id: 2,
    video: vid1,
    classNames: 'col-span-12 col-span-md-6 row-span-md-2'
  },
  {
    id: 3,
    img: thumb2,
    largeImg: img2,
    classNames:
      'row-start-2 row-start-md-auto col-span-6 col-span-md-3 row-span-md-1'
  },
  {
    id: 4,
    img: thumb3,
    largeImg: img3,
    classNames:
      'row-start-2 row-start-md-auto col-span-6 col-span-md-3 row-md-span-1'
  },
  {
    id: 5,
    img: thumb4,
    largeImg: img4,
    classNames: 'col-span-12 col-span-md-6'
  },
  {
    id: 6,
    img: thumb5,
    largeImg: img5,
    classNames: 'col-span-12 col-span-md-6'
  },
  {
    id: 7,
    img: thumb6,
    largeImg: img6,
    classNames: 'col-span-12 col-span-md-6 row-span-md-2'
  },
  {
    id: 8,
    img: thumb7,
    largeImg: img7,
    classNames: 'col-span-12 col-span-md-6 row-span-md-1'
  },
  {
    id: 9,
    img: thumb8,
    largeImg: img8,
    classNames: 'col-span-6 col-span-md-3 row-span-md-1'
  },
  {
    id: 10,
    img: thumb9,
    largeImg: img9,
    classNames: 'col-span-6 col-span-md-3 row-span-md-1'
  }
];
