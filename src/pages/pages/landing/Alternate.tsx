import AddressSection from 'components/modules/landing/alternate/AddressSection';
import Cta from 'components/modules/landing/alternate/Cta';
import Footer from 'components/modules/landing/alternate/Footer';
import Gallery from 'components/modules/landing/alternate/Gallery';
import HeroHeader from 'components/modules/landing/alternate/HeroHeader';
import OneStopSolution from 'components/modules/landing/alternate/OneStopSolution';
import Stats from 'components/modules/landing/alternate/Stats';
import TeamSection from 'components/modules/landing/alternate/TeamSection';
import Testimonial from 'components/modules/landing/alternate/Testimonial';
import Blogs from 'components/modules/landing/alternate/blogs/Blogs';
import Features from 'components/modules/landing/alternate/features/Features';
import Pricing from 'components/modules/landing/alternate/pricing/Pricing';
import Brands from 'components/modules/landing/default/Brands';
import DefaultLandingNavbar from 'components/navbars/default-landing-navbar/DefaultLandingNavbar';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const Alternate = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <div className="bg-body-emphasis dark__bg-gray-1200">
      <DefaultLandingNavbar className="dark__bg-gray-1200" />
      <HeroHeader />
      <Brands />
      <Features />
      <Testimonial />
      <Gallery />
      <OneStopSolution />
      <Stats />
      <Pricing />
      <Blogs />
      <AddressSection />
      <TeamSection />
      <Cta />
      <Footer />
    </div>
  );
};

export default Alternate;
