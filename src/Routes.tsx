import MainLayout from 'layouts/MainLayout';
import Starter from 'pages/pages/Starter';
import { Navigate, RouteObject, createBrowserRouter } from 'react-router';
import ButtonExample from 'pages/modules/components/ButtonExample';
import AccordionExample from 'pages/modules/components/AccordionExample';
import AvatarExample from 'pages/modules/components/AvatarExample';
import BadgeExample from 'pages/modules/components/BadgeExample';
import BreadcrumbExample from 'pages/modules/components/BreadcrumbExample';
import CardExample from 'pages/modules/components/CardExample';
import BootstrapCarousel from 'pages/modules/components/BootstrapCarousel';
import CollapseExample from 'pages/modules/components/CollapseExample';
import DropdownExample from 'pages/modules/components/DropdownExample';
import ListGroupExample from 'pages/modules/components/ListGroupExample';
import ModalExample from 'pages/modules/components/ModalExample';
import OffcanvasExample from 'pages/modules/components/OffcanvasExample';
import ProgressbarExample from 'pages/modules/components/ProgressbarExample';
import PlaceholderExample from 'pages/modules/components/PlaceholderExample';
import PaginationExample from 'pages/modules/components/PaginationExample';
import PopoversExample from 'pages/modules/components/PopoversExample';
import SpinnerExample from 'pages/modules/components/SpinnerExample';
import ToastsExample from 'pages/modules/components/ToastsExample';
import TooltipExample from 'pages/modules/components/TooltipExample';
import AlertsExample from 'pages/modules/components/AlertsExample';
import FormControlExample from 'pages/modules/forms/basic/FormControlExample';
import InputGroupExample from 'pages/modules/forms/basic/InputGroupExample';
import SelectExample from 'pages/modules/components/SelectExample';
import ChecksExample from 'pages/modules/components/ChecksExample';
import RangeExample from 'pages/modules/components/RangeExample';
import FloatingLabelExample from 'pages/modules/components/FloatingLabelExample';
import FormLayoutExample from 'pages/modules/components/FormLayoutExample';
import FormValidationExample from 'pages/modules/components/FormValidationExample';
import BackgroundExample from 'pages/modules/utilities/BackgroundExample';
import BorderExample from 'pages/modules/utilities/BorderExample';
import ColorsExample from 'pages/modules/utilities/ColorsExample';
import DisplayExample from 'pages/modules/utilities/DisplayExample';
import FlexExample from 'pages/modules/utilities/FlexExample';
import StackExample from 'pages/modules/utilities/StackExample';
import FloatExample from 'pages/modules/utilities/FloatExample';
import InteractionsExample from 'pages/modules/utilities/InteractionsExample';
import OpacityExample from 'pages/modules/utilities/OpacityExample';
import OverflowExample from 'pages/modules/utilities/OverflowExample';
import PositionExample from 'pages/modules/utilities/PositionExample';
import ShadowsExample from 'pages/modules/utilities/ShadowsExample';
import SizingExample from 'pages/modules/utilities/SizingExample';
import SpacingExample from 'pages/modules/utilities/SpacingExample';
import VerticalAlignExample from 'pages/modules/utilities/VerticalAlignExample';
import VisibilityExample from 'pages/modules/utilities/VisibilityExample';
import BasicTableExample from 'pages/modules/tables/BasicTableExample';
import GridExample from 'pages/modules/utilities/GridExample';
import TypographyExample from 'pages/modules/utilities/TypographyExample';
import Configuration from 'pages/documentation/customization/Configuration';
import Styling from 'pages/documentation/customization/Styling';
import DarkMode from 'pages/documentation/customization/DarkMode';
import GettingStarted from 'pages/documentation/GettingStarted';
import DesignFile from 'pages/documentation/DesignFile';
import ChangeLog from 'pages/documentation/ChangeLog';
import NavsExample from 'pages/modules/components/NavsExample';
import TabsExample from 'pages/modules/components/TabsExample';
import NavbarExample from 'pages/modules/components/NavbarExample';
import EcommerceLayout from 'layouts/EcommerceLayout';
import Homepage from 'pages/apps/e-commerce/customer/Homepage';
import ProductDetails from 'pages/apps/e-commerce/customer/ProductDetails';
import Cart from 'pages/apps/e-commerce/customer/Cart';
import Checkout from 'pages/apps/e-commerce/customer/checkout/Checkout';
import ProductsFilter from 'pages/apps/e-commerce/customer/ProductsFilter';
import ShippingInfo from 'pages/apps/e-commerce/customer/checkout/ShippingInfo';
import Profile from 'pages/apps/e-commerce/customer/Profile';
import Wishlist from 'pages/apps/e-commerce/customer/Wishlist';
import FavoriteStores from 'pages/apps/e-commerce/customer/FavoriteStores';
import Invoice from 'pages/apps/e-commerce/customer/Invoice';
import OrderTracking from 'pages/apps/e-commerce/customer/OrderTracking';
import AddProduct from 'pages/apps/e-commerce/admin/AddProduct';
import EditProduct from 'pages/apps/e-commerce/admin/EditProduct';

import Products from 'pages/apps/e-commerce/admin/Products';
import Customers from 'pages/apps/e-commerce/admin/Customers';
import Orders from 'pages/apps/e-commerce/admin/Orders';
import OrderDetails from 'pages/apps/e-commerce/admin/OrderDetails';
import Refund from 'pages/apps/e-commerce/admin/Refund';
import CustomerDetails from 'pages/apps/e-commerce/admin/CustomerDetails';
import CreateNew from 'pages/apps/project-management/CreateNew';
import ProjectListView from 'pages/apps/project-management/ProjectListView';
import ProjectDetails from 'pages/apps/project-management/ProjectDetails';
import MainLayoutProvider from 'providers/MainLayoutProvider';
import ProjectTodoList from 'pages/apps/project-management/ProjectTodoList';
import ProjectBoardView from 'pages/apps/project-management/ProjectBoardView';
import ProjectCardView from 'pages/apps/project-management/ProjectCardView';
import CreateAnEvent from 'pages/apps/events/CreateAnEvent';
import EventDetail from 'pages/apps/events/EventDetail';
import ChatHomepage from 'pages/apps/chat/ChatHomepage';
import ChatConversation from 'pages/apps/chat/ChatConversation';
import FaqAccordion from 'pages/faq/FaqAccordion';
import Inbox from 'pages/apps/email/Inbox';
import EmailDetail from 'pages/apps/email/EmailDetail';
import Compose from 'pages/apps/email/Compose';
import Notification from 'pages/notifications/Notifications';
import PricingColumn from 'pages/pages/pricing/PricingColumn';
import SocialProfile from 'pages/apps/social/SocialProfile';
import Settings from 'pages/apps/social/Settings';
import Feed from 'pages/apps/social/Feed';
import Error404 from 'pages/error/Error404';
import Error403 from 'pages/error/Error403';
import Error500 from 'pages/error/Error500';
import SimpleSignIn from 'pages/pages/authentication/simple/SignIn';
import SimpleSignUp from 'pages/pages/authentication/simple/SignUp';
import SimpleSignOut from 'pages/pages/authentication/simple/SignOut';
import SimpleResetPassword from 'pages/pages/authentication/simple/ResetPassword';
import SimpleLockScreen from 'pages/pages/authentication/simple/LockScreen';
import SimpleTwoFA from 'pages/pages/authentication/simple/TwoFA';
import SimpleForgotPassword from 'pages/pages/authentication/simple/ForgotPassword';
import Showcase from 'pages/Showcase';
import VerticalSidenav from 'pages/pages/layouts/VerticalSidenav';
import DarkModeDemo from 'pages/pages/layouts/DarkModeDemo';
import SidenavCollapse from 'pages/pages/layouts/SidenavCollapse';
import Darknav from 'pages/pages/layouts/Darknav';
import TopnavSlim from 'pages/pages/layouts/TopnavSlim';
import NavbarTopSlim from 'pages/pages/layouts/NavbarTopSlim';
import NavbarTop from 'pages/pages/layouts/NavbarTop';
import NavbarHorizontalSlim from 'pages/pages/layouts/NavbarHorizontalSlim';
import ComboNav from 'pages/pages/layouts/ComboNav';
import ComboNavSlim from 'pages/pages/layouts/ComboNavSlim';
import RatingExample from 'pages/modules/forms/advance/RatingExample';
import CountupExample from 'pages/modules/components/CountupExample';
import EditorExample from 'pages/modules/forms/advance/EditorExample';
import SwiperCarousel from 'pages/modules/components/SwiperCarousel';
import FileUploaderExample from 'pages/modules/forms/advance/FileUploaderExample';
import AdvanceSelectExample from 'pages/modules/forms/advance/AdvanceSelectExample';
import DatePickerExample from 'pages/modules/forms/advance/DatePickerExample';
import Members from 'pages/Members';
import DualNav from 'pages/pages/layouts/DualNav';
import App from 'App';
import LeadDetails from 'pages/apps/crm/LeadDetails';
import DealDetails from 'pages/apps/crm/DealDetails';
import ReportDetails from 'pages/apps/crm/ReportDetails';
import CardSignIn from 'pages/pages/authentication/card/SignIn';
import CardSignUp from 'pages/pages/authentication/card/SignUp';
import CardForgotPassword from 'pages/pages/authentication/card/ForgotPassword';
import CardSignOut from 'pages/pages/authentication/card/SignOut';
import CardResetPassword from 'pages/pages/authentication/card/ResetPassword';
import CardTwoFA from 'pages/pages/authentication/card/TwoFA';
import CardLockScreen from 'pages/pages/authentication/card/LockScreen';
import Leads from 'pages/apps/crm/Leads';
import Reports from 'pages/apps/crm/Reports';
import AddContact from 'pages/apps/crm/AddContact';
import PricingGrid from 'pages/pages/pricing/PricingGrid';
import SplitSignIn from 'pages/pages/authentication/split/SignIn';
import SplitSignUp from 'pages/pages/authentication/split/SignUp';
import SplitSignOut from 'pages/pages/authentication/split/SignOut';
import SplitForgotPassword from 'pages/pages/authentication/split/ForgotPassword';
import SplitResetPassword from 'pages/pages/authentication/split/ResetPassword';
import SplitLockScreen from 'pages/pages/authentication/split/LockScreen';
import SplitTwoFA from 'pages/pages/authentication/split/TwoFA';
import { Suspense, lazy } from 'react';
import PhoenixLoader from 'components/common/PhoenixLoader';
import Migrations from 'pages/documentation/Migrations';
import Boards from 'pages/apps/kanban/Boards';
import CreateBoard from 'pages/apps/kanban/CreateBoard';
import WizardExample from 'pages/modules/forms/WizardExample';
import Deals from 'pages/apps/crm/Deals';
import FaqTab from 'pages/faq/FaqTab';
import Timeline from 'pages/pages/Timeline';
import DraggableExample from 'pages/modules/components/DraggableExample';
import Widgets from 'pages/modules/Widgets';
import ComingSoon from 'pages/ComingSoon';

const FontAwesomeExample = lazy(
  () => import('pages/modules/components/FontAwesomeExample')
);
const FeatherIconsExample = lazy(
  () => import('pages/modules/components/FeatherIconsExample')
);
const UniconsExample = lazy(
  () => import('pages/modules/components/UniconsExample')
);
const ECharts = lazy(() => import('pages/modules/charts/ECharts'));
const Calendar = lazy(() => import('pages/apps/calendar/Calendar'));
const CalendarExample = lazy(
  () => import('pages/modules/components/CalendarExample')
);
const AdvanceTableExample = lazy(
  () => import('pages/modules/tables/AdvanceTableExample')
);
const Ecommerce = lazy(() => import('pages/dashboard/ecommerce'));
const TravelAgency = lazy(() => import('pages/dashboard/TravelAgency'));
const Chat = lazy(() => import('pages/apps/chat/Chat'));
const GanttChartExample = lazy(
  () => import('pages/modules/charts/GanttChartExample')
);
const EmojiButtonExample = lazy(
  () => import('pages/modules/forms/advance/EmojiButtonExample')
);
const ReactRangeExample = lazy(
  () => import('pages/modules/forms/advance/RangeExample')
);
const LightboxExample = lazy(
  () => import('pages/modules/components/LightboxExample')
);
const ProjectManagement = lazy(
  () => import('pages/dashboard/ProjectManagement')
);
const StockDashboard = lazy(() => import('pages/dashboard/Stock'));
const Crm = lazy(() => import('pages/dashboard/Crm'));
const Analytics = lazy(() => import('pages/apps/crm/Analytics'));
const Kanban = lazy(() => import('pages/apps/kanban/Kanban'));
const Default = lazy(() => import('pages/pages/landing/Default'));
const Alternate = lazy(() => import('pages/pages/landing/Alternate'));
const GridView = lazy(() => import('pages/apps/file-manager/GridView'));
const ListView = lazy(() => import('pages/apps/file-manager/ListView'));

const StockDetails = lazy(() => import('pages/apps/stock/StockDetails'));
const Portfolio = lazy(() => import('pages/apps/stock/Portfolio'));
const Watchlist = lazy(() => import('pages/apps/stock/Watchlist'));

import Color from './pages/documentation/customization/Color';
import TravelLanding from 'pages/apps/travel-agency/landing/Landing';
import RoomListing from 'pages/apps/travel-agency/hotel/admin/RoomListing';
import HotelHomepage from 'pages/apps/travel-agency/hotel/customer/homepage/Homepage';
import HotelGallery from 'pages/apps/travel-agency/hotel/customer/HotelGallery';
import HotelCompare from 'pages/apps/travel-agency/hotel/customer/HotelCompare';
import HotelDetails from 'pages/apps/travel-agency/hotel/customer/HotelDetails';
import AddProperty from 'pages/apps/travel-agency/hotel/admin/AddProperty';
import AddRoom from 'pages/apps/travel-agency/hotel/admin/AddRoom';
import SearchRoom from 'pages/apps/travel-agency/hotel/admin/SearchRoom';
import TravelAgencyLayout from 'layouts/TravelAgencyLayout';
import TravelLandingLayout from 'layouts/TravelLandingLayout';
import HotelCheckout from 'pages/apps/travel-agency/hotel/customer/HotelCheckout';
import HotelPayment from 'pages/apps/travel-agency/hotel/customer/HotelPayment';
import FlightHomepage from 'pages/apps/travel-agency/flight/Homepage';
import FlightBooking from 'pages/apps/travel-agency/flight/Booking';
import FlightPayment from 'pages/apps/travel-agency/flight/Payment';
import FlightAlternateLayout from 'layouts/FlightAlternateLayout';

import TripHomepage from 'pages/apps/travel-agency/trip/Homepage';
import TripDetails from 'pages/apps/travel-agency/trip/TripDetails';
import TripCheckout from 'pages/apps/travel-agency/trip/Checkout';
import TripLayout from 'layouts/TripLayout';
import FileManagerProvider from 'providers/FileManagerProvider';
import GanttChart from 'pages/apps/gantt-chart/GanttChart';

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <MainLayoutProvider>
            {/* <MainLayout /> */}
            <Navigate to="/apps/e-commerce/customer/homepage" replace />
          </MainLayoutProvider>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense key="index" fallback={<PhoenixLoader />}>
                <Ecommerce />
              </Suspense>
            )
          },
          {
            path: '/dashboard',
            children: [
              {
                path: 'project-management',
                element: (
                  <Suspense
                    key="project-management"
                    fallback={<PhoenixLoader />}
                  >
                    <ProjectManagement />
                  </Suspense>
                )
              },
              {
                path: 'crm',
                element: (
                  <Suspense key="crm" fallback={<PhoenixLoader />}>
                    <Crm />
                  </Suspense>
                )
              },
              {
                path: 'travel-agency',
                element: (
                  <Suspense key="travel-agency" fallback={<PhoenixLoader />}>
                    <TravelAgency />
                  </Suspense>
                )
              },
              {
                path: 'stock',
                element: (
                  <Suspense key="stock" fallback={<PhoenixLoader />}>
                    <StockDashboard />
                  </Suspense>
                )
              }
            ]
          },
          {
            path: '/apps',
            children: [
              {
                path: 'e-commerce/admin',
                children: [
                  {
                    path: 'add-product',
                    element: <AddProduct />
                  },
                  {
                    path: 'edit-product/:id',
                    element: <EditProduct />
                  },
                  {
                    path: 'products',
                    element: <Products />
                  },
                  {
                    path: 'customers',
                    element: <Customers />
                  },
                  {
                    path: 'orders',
                    element: <Orders />
                  },
                  {
                    path: 'order-details',
                    element: <OrderDetails />
                  },
                  {
                    path: 'refund',
                    element: <Refund />
                  },
                  {
                    path: 'customer-details',
                    element: <CustomerDetails />
                  }
                ]
              },
              {
                path: 'crm',
                children: [
                  {
                    path: 'analytics',
                    element: (
                      <Suspense key="analytics" fallback={<PhoenixLoader />}>
                        <Analytics />
                      </Suspense>
                    )
                  },
                  {
                    path: 'deals',
                    element: <Deals />
                  },
                  {
                    path: 'deal-details',
                    element: <DealDetails />
                  },
                  {
                    path: 'report-details',
                    element: <ReportDetails />
                  },
                  {
                    path: 'leads',
                    element: <Leads />
                  },
                  {
                    path: 'lead-details',
                    element: <LeadDetails />
                  },
                  {
                    path: 'reports',
                    element: <Reports />
                  },
                  {
                    path: 'add-contact',
                    element: <AddContact />
                  }
                ]
              },
              {
                path: 'project-management',
                children: [
                  {
                    path: 'create-new',
                    element: <CreateNew />
                  },
                  {
                    path: 'project-list-view',
                    element: <ProjectListView />
                  },
                  {
                    path: 'project-card-view',
                    element: <ProjectCardView />
                  },
                  {
                    path: 'project-board-view',
                    element: <ProjectBoardView />
                  },
                  {
                    path: 'todo-list',
                    element: <ProjectTodoList />
                  },
                  {
                    path: 'project-details',
                    element: <ProjectDetails />
                  }
                ]
              },
              {
                path: 'events',
                children: [
                  {
                    path: 'create-an-event',
                    element: <CreateAnEvent />
                  },
                  {
                    path: 'event-detail',
                    element: <EventDetail />
                  }
                ]
              },
              {
                path: 'kanban',
                children: [
                  {
                    path: 'kanban',
                    element: (
                      <Suspense key="kanban" fallback={<PhoenixLoader />}>
                        <Kanban />
                      </Suspense>
                    )
                  },
                  {
                    path: 'boards',
                    element: <Boards />
                  },
                  {
                    path: 'create-board',
                    element: <CreateBoard />
                  }
                ]
              },
              {
                path: 'gantt-chart',
                element: (
                  <Suspense key='gantt_chart' fallback={<PhoenixLoader />}>
                    <GanttChart />
                  </Suspense>
                )
              },
              {
                path: 'chat',
                element: (
                  <Suspense fallback={<PhoenixLoader />}>
                    <Chat />
                  </Suspense>
                ),
                children: [
                  {
                    index: true,
                    element: <ChatHomepage />
                  },
                  {
                    path: ':userId/conversation',
                    element: <ChatConversation />
                  }
                ]
              },
              {
                path: 'social',
                children: [
                  {
                    path: 'profile',
                    element: <SocialProfile />
                  },
                  {
                    path: 'settings',
                    element: <Settings />
                  },
                  {
                    path: 'feed',
                    element: <Feed />
                  }
                ]
              },
              {
                path: 'calendar',
                element: (
                  <Suspense key="calendar" fallback={<PhoenixLoader />}>
                    <Calendar />
                  </Suspense>
                )
              },
              {
                path: 'email',
                children: [
                  {
                    path: 'inbox',
                    element: <Inbox />
                  },
                  {
                    path: 'email-detail',
                    element: <EmailDetail />
                  },
                  {
                    path: 'compose',
                    element: <Compose />
                  }
                ]
              },
              {
                path: 'travel-agency/hotel/admin',
                children: [
                  {
                    path: 'add-property',
                    element: <AddProperty />
                  },
                  {
                    path: 'add-room',
                    element: <AddRoom />
                  },
                  {
                    path: 'room-listing',
                    element: <RoomListing />
                  },
                  {
                    path: 'search-room',
                    element: <SearchRoom />
                  }
                ]
              },
              {
                path: 'file-manager',
                children: [
                  {
                    path: 'grid-view',
                    element: (
                      <FileManagerProvider>
                        <Suspense key="gridView" fallback={<PhoenixLoader />}>
                          <GridView />
                        </Suspense>
                      </FileManagerProvider>
                    )
                  },
                  {
                    path: 'list-view',
                    element: (
                      <FileManagerProvider>
                        <Suspense key="listView" fallback={<PhoenixLoader />}>
                          <ListView />
                        </Suspense>
                      </FileManagerProvider>
                    )
                  }
                ]
              },
              {
                path: 'stock',
                children: [
                  {
                    path: 'stock-details',
                    element: (
                      <Suspense key="stockDetails" fallback={<PhoenixLoader />}>
                        <StockDetails />
                      </Suspense>
                    )
                  },
                  {
                    path: 'portfolio',
                    element: (
                      <Suspense key="portfolio" fallback={<PhoenixLoader />}>
                        <Portfolio />
                      </Suspense>
                    )
                  },
                  {
                    path: 'watchlist',
                    element: (
                      <Suspense key="watchlist" fallback={<PhoenixLoader />}>
                        <Watchlist />
                      </Suspense>
                    )
                  }
                ]
              }
            ]
          },
          {
            path: '/pages',
            children: [
              {
                path: 'starter',
                element: <Starter />
              },
              {
                path: 'faq',
                children: [
                  {
                    path: 'faq-accordion',
                    element: <FaqAccordion />
                  },
                  {
                    path: 'faq-tab',
                    element: <FaqTab />
                  }
                ]
              },
              {
                path: 'pricing',
                children: [
                  {
                    path: 'pricing-column',
                    element: <PricingColumn />
                  },
                  {
                    path: 'pricing-grid',
                    element: <PricingGrid />
                  }
                ]
              },
              {
                path: 'notifications',
                element: <Notification />
              },
              {
                path: 'members',
                element: <Members />
              },
              {
                path: 'timeline',
                element: <Timeline />
              },
              {
                path: 'coming-soon',
                element: <ComingSoon />
              },
              {
                path: 'demo',
                children: [
                  {
                    path: 'vertical-sidenav',
                    element: <VerticalSidenav />
                  },
                  {
                    path: 'dark-mode',
                    element: <DarkModeDemo />
                  },
                  {
                    path: 'sidenav-collapse',
                    element: <SidenavCollapse />
                  },
                  {
                    path: 'darknav',
                    element: <Darknav />
                  },
                  {
                    path: 'topnav-slim',
                    element: <TopnavSlim />
                  },
                  {
                    path: 'navbar-top-slim',
                    element: <NavbarTopSlim />
                  },
                  {
                    path: 'navbar-top',
                    element: <NavbarTop />
                  },
                  {
                    path: 'horizontal-slim',
                    element: <NavbarHorizontalSlim />
                  },
                  {
                    path: 'combo-nav',
                    element: <ComboNav />
                  },
                  {
                    path: 'combo-nav-slim',
                    element: <ComboNavSlim />
                  },
                  {
                    path: 'dual-nav',
                    element: <DualNav />
                  }
                ]
              }
            ]
          },
          {
            path: '/modules',
            children: [
              {
                path: 'tables',
                children: [
                  {
                    path: 'basic-tables',
                    element: <BasicTableExample />
                  },
                  {
                    path: 'advance-tables',
                    element: (
                      <Suspense
                        key="advanceTables"
                        fallback={<PhoenixLoader />}
                      >
                        <AdvanceTableExample />
                      </Suspense>
                    )
                  }
                ]
              },
              {
                path: 'charts',
                children: [
                  {
                    path: 'e-charts',
                    element: (
                      <Suspense key="e-charts" fallback={<PhoenixLoader />}>
                        <ECharts />
                      </Suspense>
                    )
                  },
                  {
                    path: 'gantt-chart',
                    element: (
                      <Suspense fallback={<PhoenixLoader />}>
                        <GanttChartExample />
                      </Suspense>
                    )
                  }
                ]
              },
              {
                path: 'icons',
                children: [
                  {
                    path: 'font-awesome',
                    element: (
                      <Suspense key="font-awesome" fallback={<PhoenixLoader />}>
                        <FontAwesomeExample />
                      </Suspense>
                    )
                  },
                  {
                    path: 'feather',
                    element: (
                      <Suspense key="feather" fallback={<PhoenixLoader />}>
                        <FeatherIconsExample />
                      </Suspense>
                    )
                  },
                  {
                    path: 'unicons',
                    element: (
                      <Suspense key="unicons" fallback={<PhoenixLoader />}>
                        <UniconsExample />
                      </Suspense>
                    )
                  }
                ]
              },
              {
                path: 'components',
                children: [
                  {
                    path: 'accordion',
                    element: <AccordionExample />
                  },
                  {
                    path: 'avatar',
                    element: <AvatarExample />
                  },
                  {
                    path: 'alerts',
                    element: <AlertsExample />
                  },
                  {
                    path: 'button',
                    element: <ButtonExample />
                  },
                  {
                    path: 'badge',
                    element: <BadgeExample />
                  },
                  {
                    path: 'breadcrumb',
                    element: <BreadcrumbExample />
                  },
                  {
                    path: 'card',
                    element: <CardExample />
                  },
                  {
                    path: 'carousel/bootstrap',
                    element: <BootstrapCarousel />
                  },
                  {
                    path: 'carousel/swiper',
                    element: <SwiperCarousel />
                  },
                  {
                    path: 'collapse',
                    element: <CollapseExample />
                  },
                  {
                    path: 'dropdown',
                    element: <DropdownExample />
                  },
                  {
                    path: 'list-group',
                    element: <ListGroupExample />
                  },
                  {
                    path: 'countup',
                    element: <CountupExample />
                  },
                  {
                    path: 'draggable',
                    element: <DraggableExample />
                  },
                  {
                    path: 'modal',
                    element: <ModalExample />
                  },
                  {
                    path: 'offcanvas',
                    element: <OffcanvasExample />
                  },
                  {
                    path: 'progress-bar',
                    element: <ProgressbarExample />
                  },
                  {
                    path: 'placeholder',
                    element: <PlaceholderExample />
                  },
                  {
                    path: 'pagination',
                    element: <PaginationExample />
                  },
                  {
                    path: 'popovers',
                    element: <PopoversExample />
                  },
                  {
                    path: 'spinners',
                    element: <SpinnerExample />
                  },
                  {
                    path: 'toast',
                    element: <ToastsExample />
                  },
                  {
                    path: 'tooltips',
                    element: <TooltipExample />
                  },
                  {
                    path: 'calendar',
                    element: (
                      <Suspense key="calendar" fallback={<PhoenixLoader />}>
                        <CalendarExample />
                      </Suspense>
                    )
                  },
                  {
                    path: 'navs-and-tabs/navs',
                    element: <NavsExample />
                  },
                  {
                    path: 'navs-and-tabs/tabs',
                    element: <TabsExample />
                  },
                  {
                    path: 'navs-and-tabs/navbar',
                    element: <NavbarExample />
                  },
                  {
                    path: 'pictures/lightbox',
                    element: (
                      <Suspense key="lightbox" fallback={<PhoenixLoader />}>
                        <LightboxExample />
                      </Suspense>
                    )
                  }
                ]
              },
              {
                path: 'forms',
                children: [
                  {
                    path: 'form-control',
                    element: <FormControlExample />
                  },
                  {
                    path: 'input-group',
                    element: <InputGroupExample />
                  },
                  {
                    path: 'select',
                    element: <SelectExample />
                  },
                  {
                    path: 'checks',
                    element: <ChecksExample />
                  },
                  {
                    path: 'range',
                    element: <RangeExample />
                  },
                  {
                    path: 'floating-labels',
                    element: <FloatingLabelExample />
                  },
                  {
                    path: 'layout',
                    element: <FormLayoutExample />
                  },
                  {
                    path: 'editor',
                    element: <EditorExample />
                  },
                  {
                    path: 'advance-select',
                    element: <AdvanceSelectExample />
                  },
                  {
                    path: 'date-picker',
                    element: <DatePickerExample />
                  },
                  {
                    path: 'emoji-button',
                    element: (
                      <Suspense key="emoji-button" fallback={<PhoenixLoader />}>
                        <EmojiButtonExample />
                      </Suspense>
                    )
                  },
                  {
                    path: 'file-uploader',
                    element: <FileUploaderExample />
                  },
                  {
                    path: 'advance/range',
                    element: (
                      <Suspense key="range" fallback={<PhoenixLoader />}>
                        <ReactRangeExample />
                      </Suspense>
                    )
                  },
                  {
                    path: 'rating',
                    element: <RatingExample />
                  },
                  {
                    path: 'validation',
                    element: <FormValidationExample />
                  },
                  {
                    path: 'wizard',
                    element: <WizardExample />
                  }
                ]
              },
              {
                path: 'utilities',
                children: [
                  {
                    path: 'background',
                    element: <BackgroundExample />
                  },
                  {
                    path: 'borders',
                    element: <BorderExample />
                  },
                  {
                    path: 'colors',
                    element: <ColorsExample />
                  },
                  {
                    path: 'display',
                    element: <DisplayExample />
                  },
                  {
                    path: 'grid',
                    element: <GridExample />
                  },
                  {
                    path: 'flex',
                    element: <FlexExample />
                  },
                  {
                    path: 'stack',
                    element: <StackExample />
                  },
                  {
                    path: 'float',
                    element: <FloatExample />
                  },
                  {
                    path: 'interactions',
                    element: <InteractionsExample />
                  },
                  {
                    path: 'opacity',
                    element: <OpacityExample />
                  },
                  {
                    path: 'overflow',
                    element: <OverflowExample />
                  },
                  {
                    path: 'position',
                    element: <PositionExample />
                  },
                  {
                    path: 'shadows',
                    element: <ShadowsExample />
                  },
                  {
                    path: 'sizing',
                    element: <SizingExample />
                  },
                  {
                    path: 'spacing',
                    element: <SpacingExample />
                  },
                  {
                    path: 'typography',
                    element: <TypographyExample />
                  },
                  {
                    path: 'vertical-align',
                    element: <VerticalAlignExample />
                  },
                  {
                    path: 'visibility',
                    element: <VisibilityExample />
                  }
                ]
              }
            ]
          },
          {
            path: '/documentation',
            children: [
              {
                path: 'getting-started',
                element: <GettingStarted />
              },
              {
                path: 'design-file',
                element: <DesignFile />
              },
              {
                path: 'customization',
                children: [
                  {
                    path: 'configuration',
                    element: <Configuration />
                  },
                  {
                    path: 'color',
                    element: <Color />
                  },
                  {
                    path: 'styling',
                    element: <Styling />
                  },
                  {
                    path: 'dark-mode',
                    element: <DarkMode />
                  }
                ]
              }
            ]
          },
          {
            path: 'changelog',
            element: <ChangeLog />
          },
          {
            path: 'migrations',
            element: <Migrations />
          },
          {
            path: 'widgets',
            element: <Widgets />
          }
        ]
      },

      {
        element: <EcommerceLayout />,
        path: '/apps/e-commerce/customer/',
        children: [
          {
            path: 'homepage',
            element: <Homepage />
          },
          {
            path: 'product-details/:id',
            element: (
              <Suspense key="product-details" fallback={<PhoenixLoader />}>
                <ProductDetails />
              </Suspense>
            )
          },
          {
            path: 'cart',
            element: <Cart />
          },
          {
            path: 'checkout',
            element: <Checkout />
          },
          {
            path: 'shipping-info',
            element: <ShippingInfo />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'products-filter',
            element: <ProductsFilter />
          },
          {
            path: 'wishlist',
            element: <Wishlist />
          },
          {
            path: 'favorite-stores',
            element: <FavoriteStores />
          },
          {
            path: 'order-tracking',
            element: <OrderTracking />
          },
          {
            path: 'invoice',
            element: <Invoice />
          }
        ]
      },
      {
        path: 'pages/landing',
        children: [
          {
            path: 'default',
            element: (
              <Suspense
                key="landingDefault"
                fallback={<PhoenixLoader fullPage />}
              >
                <Default />
              </Suspense>
            )
          },
          {
            path: 'alternate',
            element: (
              <Suspense
                key="landingALternate"
                fallback={<PhoenixLoader fullPage />}
              >
                <Alternate />
              </Suspense>
            )
          }
        ]
      },
      {
        element: <TravelLandingLayout />,
        path: '/apps/travel-agency',
        children: [
          {
            path: 'landing',
            element: <TravelLanding />
          }
        ]
      },
      {
        element: <TravelAgencyLayout />,
        path: '/apps/travel-agency/hotel/customer',
        children: [
          {
            children: [
              {
                path: 'homepage',
                element: <HotelHomepage />
              },
              {
                path: 'hotel-details',
                element: <HotelDetails />
              },
              {
                path: 'hotel-compare',
                element: <HotelCompare />
              },
              {
                path: 'checkout',
                element: <HotelCheckout />
              },
              {
                path: 'payment',
                element: <HotelPayment />
              },
              {
                path: 'gallery',
                element: <HotelGallery />
              }
            ]
          }
        ]
      },
      {
        element: <TravelAgencyLayout />,
        path: 'apps/travel-agency/flight',
        children: [
          {
            children: [
              {
                path: 'homepage',
                element: <FlightHomepage />
              }
            ]
          }
        ]
      },
      {
        element: <FlightAlternateLayout />,
        path: 'apps/travel-agency/flight',
        children: [
          {
            children: [
              {
                path: 'booking',
                element: <FlightBooking />
              },
              {
                path: 'payment',
                element: <FlightPayment />
              }
            ]
          }
        ]
      },
      {
        element: <TripLayout />,
        path: 'apps/travel-agency/trip',
        children: [
          {
            children: [
              {
                path: 'homepage',
                element: <TripHomepage />
              },
              {
                path: 'trip-details',
                element: <TripDetails />
              },
              {
                path: 'checkout',
                element: <TripCheckout />
              }
            ]
          }
        ]
      },
      {
        path: '/pages/errors/',
        children: [
          {
            path: '404',
            element: <Error404 />
          },
          {
            path: '403',
            element: <Error403 />
          },
          {
            path: '500',
            element: <Error500 />
          }
        ]
      },
      {
        path: '/pages/authentication/simple/',
        children: [
          {
            path: 'sign-in',
            element: <SimpleSignIn />
          },
          {
            path: 'sign-up',
            element: <SimpleSignUp />
          },
          {
            path: 'sign-out',
            element: <SimpleSignOut />
          },
          {
            path: 'forgot-password',
            element: <SimpleForgotPassword />
          },
          {
            path: 'reset-password',
            element: <SimpleResetPassword />
          },
          {
            path: 'lock-screen',
            element: <SimpleLockScreen />
          },
          {
            path: '2FA',
            element: <SimpleTwoFA />
          }
        ]
      },
      {
        path: '/pages/authentication/split/',
        children: [
          {
            path: 'sign-in',
            element: <SplitSignIn />
          },
          {
            path: 'sign-up',
            element: <SplitSignUp />
          },
          {
            path: 'sign-out',
            element: <SplitSignOut />
          },
          {
            path: 'forgot-password',
            element: <SplitForgotPassword />
          },
          {
            path: 'reset-password',
            element: <SplitResetPassword />
          },
          {
            path: 'lock-screen',
            element: <SplitLockScreen />
          },
          {
            path: '2FA',
            element: <SplitTwoFA />
          }
        ]
      },
      {
        path: '/pages/authentication/card/',
        children: [
          {
            path: 'sign-in',
            element: <CardSignIn />
          },
          {
            path: 'sign-up',
            element: <CardSignUp />
          },
          {
            path: 'sign-out',
            element: <CardSignOut />
          },
          {
            path: 'forgot-password',
            element: <CardForgotPassword />
          },
          {
            path: 'reset-password',
            element: <CardResetPassword />
          },
          {
            path: 'lock-screen',
            element: <CardLockScreen />
          },
          {
            path: '2FA',
            element: <CardTwoFA />
          }
        ]
      },
      {
        path: 'showcase',
        element: <Showcase />
      },
      {
        path: '*',
        element: <Error404 />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASENAME || '/'
});

export default routes;
