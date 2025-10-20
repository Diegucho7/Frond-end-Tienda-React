import bgLeft from 'assets/img/bg/bg-left-26.png';
import bgRight from 'assets/img/bg/bg-right-26.png';
import IsotopeNav from 'components/navs/IsotopeNav';
import useLightbox from 'hooks/useLightbox';
import { useState } from 'react';
import img1 from 'assets/img/gallery/27.png';
import img2 from 'assets/img/gallery/28.png';
import img3 from 'assets/img/gallery/29.png';
import img4 from 'assets/img/gallery/30.png';
import img5 from 'assets/img/gallery/31.png';
import img6 from 'assets/img/gallery/32.png';
import img7 from 'assets/img/gallery/33.png';
import img8 from 'assets/img/gallery/34.png';
import Lightbox from 'components/base/LightBox';

type GalleryItemType = {
  img: string;
  className: string;
  category: string[];
};

const navItems = [
  {
    eventKey: '1',
    label: 'First'
  },
  {
    eventKey: '2',
    label: 'Second'
  },
  {
    eventKey: '3',
    label: 'Third'
  },
  {
    eventKey: '4',
    label: 'Fourth'
  }
];

const galleryItems: GalleryItemType[] = [
  {
    img: img1,
    className: 'col-span-6 col-span-md-4 row-span-2',
    category: ['1', '4']
  },
  {
    img: img2,
    className: 'col-span-6 col-span-md-4 row-span-1',
    category: ['1', '3']
  },
  {
    img: img3,
    className: 'col-span-6 col-span-md-4 row-span-2',
    category: ['1', '2']
  },
  {
    img: img4,
    className: 'col-span-6 col-span-md-4 row-span-1',
    category: ['1', '3']
  },
  {
    img: img6,
    className: 'col-span-6 col-span-md-4 row-span-2',
    category: ['1', '2']
  },
  {
    img: img5,
    className: 'col-span-6 col-span-md-4 row-span-1',
    category: ['1', '3']
  },
  {
    img: img7,
    className: 'col-span-6 col-span-md-4 row-span-2',
    category: ['1', '4']
  },
  {
    img: img8,
    className: 'col-span-6 col-span-md-4 row-span-1',
    category: ['1', '3']
  }
];

const GalleryItem = ({
  galleryItem,
  onClick
}: {
  galleryItem: GalleryItemType;
  onClick: () => void;
}) => {
  return (
    <div
      className={`${galleryItem.className} cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={galleryItem.img}
        alt=""
        className="rounded h-100 w-100 fit-cover"
      />
    </div>
  );
};

const Gallery = () => {
  const [images, setImages] = useState(galleryItems);
  const [selectedCategory, setSelectedCategory] = useState('1');

  const { lightboxProps, openLightbox } = useLightbox(
    images.map(image => image.img)
  );

  const handleNavItemSelect = (category: string | null) => {
    setSelectedCategory(category || '1');
    setImages(
      galleryItems.filter(item =>
        category ? item.category.includes(category) : true
      )
    );
  };

  const handleItemClick = (index: number) => {
    openLightbox(index);
  };
  return (
    <section className="gallery">
      <div className="position-absolute left-0 w-100 gallery-overlay" />
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgLeft})`,
          backgroundSize: 'auto',
          backgroundPosition: 'left 65%'
        }}
      />
      <div
        className="bg-holder d-none d-xl-block"
        style={{
          backgroundImage: `url(${bgRight})`,
          backgroundSize: 'auto',
          backgroundPosition: 'right 62%'
        }}
      />
      <div className="container-small position-relative px-lg-7 px-xxl-3">
        <div className="text-center mb-7">
          <h5 className="text-info mb-3">Gallery</h5>
          <h2 className="mb-2">Our best works</h2>
        </div>
        <IsotopeNav
          navItems={navItems}
          className="mb-5 justify-content-center w-max-content mx-auto"
          onSelect={handleNavItemSelect}
        />
        <div className="d-grid grid-cols-12 gap-3">
          {images.map((gallery, index) => (
            <GalleryItem
              galleryItem={gallery}
              key={gallery.img}
              onClick={() => handleItemClick(index + 1)}
            />
          ))}
        </div>
        <Lightbox {...lightboxProps} key={selectedCategory} />
      </div>
    </section>
  );
};

export default Gallery;
