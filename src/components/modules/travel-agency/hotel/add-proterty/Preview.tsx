import React, { PropsWithChildren, useState } from 'react';
import { Accordion, Alert, Col, Row } from 'react-bootstrap';
import info from 'assets/img/icons/info.svg';
import infoDark from 'assets/img/icons/info_dark.svg';
import locationImg from 'assets/img/icons/location.svg';
import locationDark from 'assets/img/icons/location_dark.svg';
import bedDouble from 'assets/img/icons/bed-double.svg';
import bedDoubleDark from 'assets/img/icons/bed-double_dark.svg';
import picture from 'assets/img/icons/picture.svg';
import pictureDark from 'assets/img/icons/picture_dark.svg';
import dollarAlt from 'assets/img/icons/dollar-alt.svg';
import dollarAltDark from 'assets/img/icons/dollar-alt_dark.svg';
import fileCheckAlt from 'assets/img/icons/file-check-alt.svg';
import fileCheckAltDark from 'assets/img/icons/file-check-alt_dark.svg';
import { Link } from 'react-router';
import classNames from 'classnames';
import {
  AccordionItemInterface,
  AddPropertyWizardFormData,
  PropertyDetails,
  PropertyDetailsWithTitle
} from 'data/travel-agency/addProperty';
import SummaryTable from './SummaryTable';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { formatDateToTime } from 'helpers/utils';

const AccordionItem = (props: PropsWithChildren<AccordionItemInterface>) => {
  const { img1, img2, title, eventKey, children } = props;
  return (
    <>
      <Accordion.Item
        eventKey={eventKey}
        className="border rounded-3 bg-body-emphasis p-3 p-sm-4 mb-5 scrollbar"
      >
        <Accordion.Button className="py-0 lh-1 text-body-highlight">
          <img src={img1} alt="" className="me-2 d-dark-none" />
          <img src={img2} alt="" className="me-2 d-light-none" />
          <span className="fs-sm-7">{title}</span>
        </Accordion.Button>
        <Accordion.Collapse eventKey={eventKey} className="scrollbar">
          <div className="mt-4">
            <Link to="#!" className="fs-9 fw-semibold mb-2 d-inline-block">
              Edit Info
            </Link>
            {children}
          </div>
        </Accordion.Collapse>
      </Accordion.Item>
    </>
  );
};

const Preview = () => {
  const [show, setShow] = useState(true);
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { formData } = methods;

  const basicInfo: PropertyDetails[] = [
    {
      property: 'Property name',
      value: formData.propertyName
    },
    {
      property: 'Property Information',
      value: formData.propertyInfo
    },
    {
      property: 'Property type',
      value: formData.propertyType
    },
    {
      property: 'Rating',
      value: formData.propertyRating
    },
    {
      property: 'Email address',
      value: formData.contactEmail
    },
    {
      property: 'Mobile number',
      value: formData.contactNumber
    },
    {
      property: 'Property chain',
      value: formData.propertyChain ? 'available' : 'Not-available'
    },
    {
      property: 'CMS',
      value: formData.channelManagement ? 'available' : 'Not-available'
    },
    {
      property: 'CMS provider name',
      value: formData.channelManagement
    }
  ];

  const location: PropertyDetails[] = [
    {
      property: 'Apartment / Street',
      value: formData.apartment
    },
    {
      property: 'State',
      value: formData.state
    },
    {
      property: 'Country / Region',
      value: formData.country
    },
    {
      property: 'City',
      value: formData.city
    },
    {
      property: 'Zip code',
      value: formData.zipCode
    }
  ];

  const amenities: PropertyDetails[] = [
    {
      property: 'Wifi',
      value: formData.wifi ? 'Available' : 'Not-available'
    },
    {
      property: 'Hotel Bar',
      value: formData.hotelBar ? 'Available' : 'Not-available'
    },
    {
      property: 'Restaurant',
      value: formData.restaurant ? 'Available' : 'Not-available'
    },
    {
      property: 'Common Areas',
      value: formData.commonAreas ? 'Available' : 'Not-available'
    },
    {
      property: 'Pool',
      value: formData.pool ? 'Available' : 'Not-available'
    },
    {
      property: 'Tennis Courts',
      value: formData.tennisCourts ? 'Available' : 'Not-available'
    },
    {
      property: 'No Smoking',
      value: formData.noSmoking ? 'Available' : 'Not-available'
    },
    {
      property: 'Air Conditioning',
      value: 'Available'
    },
    {
      property: 'Parking',
      value: 'Available'
    },
    {
      property: 'Bathtub',
      value: formData.bathtub ? 'Available' : 'Not-available'
    },
    {
      property: 'Beach View',
      value: formData.beachView ? 'Available' : 'Not-available'
    },
    {
      property: 'Flat-screen TV',
      value: formData.flatScreenTv ? 'Available' : 'Not-available'
    },
    {
      property: 'Balcony',
      value: formData.balcony ? 'Available' : 'Not-available'
    }
  ];

  const financeData: PropertyDetailsWithTitle[] = [
    {
      name: 'Payment from PBM',
      data: [
        {
          property: 'Payment currency',
          value: formData.paymentCurrency
        },
        {
          property: 'Payment method',
          value: formData.paymentMethod
        },
        {
          property: 'Received payment',
          value: formData.receivedPayment
        },
        {
          property: 'Card type',
          value: formData.cardType
        },
        {
          property: 'Card number',
          value: formData.cardNumber
        },
        {
          property: 'Card holder name',
          value: formData.cardHolderName
        },
        {
          property: 'Commission Percentage',
          value: formData.commissionPercentage
        },
        {
          property: 'Invoice email',
          value: formData.invoiceEmail || 'Not available'
        }
      ]
    },
    {
      name: 'Payment from Guests (On property)',
      data: [
        {
          property: 'Cash payment',
          value: formData.cashPayment ? 'yes' : 'no'
        },
        {
          property: 'Card Payment',
          value: formData.cardPayment ? 'yes' : 'no'
        },
        {
          property: 'MFS / Online Payment',
          value: formData.onlinePayment ? 'yes' : 'no'
        }
      ]
    }
  ];

  const policiesData: PropertyDetailsWithTitle[] = [
    {
      name: 'Check-in-Policy',
      data: [
        {
          property: 'Check-in type',
          value: formData.checkInType
        },
        {
          property: 'Check-in start',
          value: formatDateToTime(formData.checkInStarts)
        },
        {
          property: 'Age Restriction',
          value: formData.ageRegistration
        },
        {
          property: 'Deposit at Check-in',
          value: formData.depositAtCheckin
        },
        {
          property: 'Documentation at Check-in',
          value: formData.documentationAtCheckin
        },
        {
          property: 'Late check-in',
          value: formData.lateCheckIn ? 'Flat 10%' : 'Not Available'
        },
        {
          property: 'Check-in end',
          value: formatDateToTime(formData.checkInEnds)
        }
      ]
    },
    {
      name: 'Checkout Policy',
      data: [
        {
          property: 'Checkout before',
          value: formatDateToTime(formData.checkOutBefore)
        },
        {
          property: 'Flexible Checkout',
          value: formData.flexibleCheckout
        },
        {
          property: 'Type',
          value: formData.checkoutType
        },
        {
          property: 'Amount',
          value: formData.checkoutAmount
        }
      ]
    },
    {
      name: 'Cancellation Policy',
      data: [
        {
          property: 'Type',
          value: formData.refundType
        },
        {
          property: 'Full refund',
          value: formData.isFullRefand
        },
        {
          property: 'Partial refund',
          value: formData.isPartialRefand
        }
      ]
    },
    {
      name: 'Pet Policy',
      data: [
        {
          property: 'Type',
          value: formData.petPolicyType
        },
        {
          property: 'Pet Restricted Zones',
          value: formData.petRestictedZone
        },
        {
          property: 'Additional Charges',
          value: formData.petAdditionalCharge
        }
      ]
    },
    {
      name: 'Child Policy',
      data: [
        {
          property: 'Age Segment 1',
          value: `${formData.ageSegment1?.join(' - ')} years`
        },
        {
          property: 'Age Segment 2',
          value: `${formData.ageSegment2?.join(' - ')} years`
        },
        {
          property: 'Age Segment 3',
          value: `${formData.ageSegment3?.join(' - ')} years`
        },
        {
          property: 'Documentation Requirement',
          value: formData.childDocPolicy
        }
      ]
    },
    {
      name: 'Included Taxes in your rate',
      data: [
        {
          property: 'Vat',
          value: formData.vat
        },
        {
          property: 'Type',
          value: formData.taxType
        },
        {
          property: 'Amount',
          value: formData.taxAmount
        },
        {
          property: 'Deposit at Check-in',
          value: formData.depositAtCheckIn
        },
        {
          property: 'GST',
          value: formData.gst
        },
        {
          property: 'Hotel tax',
          value: formData.hotelTax
        },
        {
          property: 'City / District tax',
          value: formData.cityTax
        },
        {
          property: 'Tourist tax',
          value: formData.touristTax
        }
      ]
    },
    {
      name: 'Your Documentations',
      data: [
        {
          property: 'Property Registration No.',
          value: formData.propertyRegNo
        },
        {
          property: 'Business Registration No.',
          value: formData.businessRegNo
        },
        {
          property: 'Taxpayer Identification No.',
          value: formData.taxpayeerIdNo
        }
      ]
    }
  ];

  return (
    <>
      <h3 className="mb-2">We’re building your property</h3>
      <p className="mb-5 text-body-tertiary">
        We're working on getting your property set up and ready for guests. Stay
        tuned for updates and start accepting bookings soon!
      </p>
      {show && (
        <Alert
          variant="subtle-success"
          onClose={() => setShow(false)}
          dismissible
          className="mb-5"
        >
          <p className="mb-0 flex-1 fw-semibold fs-9 fs-sm-8">
            Congratulations on your successful listing! Join a community of
            hospitality professionals as a host. Your hard work will turn your
            home into a sought-after destination?. We anticipate hearing about
            your achievements.
          </p>
        </Alert>
      )}
      <Accordion
        className="accordion-button-arrow-icon mt-2"
        id="previewAccordion"
      >
        <AccordionItem
          img1={info}
          img2={infoDark}
          title="Basic Information"
          eventKey="0"
        >
          <SummaryTable tableData={basicInfo} />
        </AccordionItem>
        <AccordionItem
          img1={locationImg}
          img2={locationDark}
          title="Location"
          eventKey="1"
        >
          <SummaryTable tableData={location} />
        </AccordionItem>

        <AccordionItem
          img1={bedDouble}
          img2={bedDoubleDark}
          title="General Amenities"
          eventKey="2"
        >
          <SummaryTable tableData={amenities} />
        </AccordionItem>
        <AccordionItem
          img1={picture}
          img2={pictureDark}
          title="Picture"
          eventKey="3"
        >
          <Row className="g-2 g-sm-3">
            {formData?.photos?.map((item, index) => (
              <Col key={index} xs={6} sm={4}>
                <img
                  src={URL.createObjectURL(item)}
                  alt="item"
                  height={160}
                  className="rounded-2 w-100 object-fit-cover"
                />
              </Col>
            ))}
          </Row>
        </AccordionItem>
        <AccordionItem
          img1={dollarAlt}
          img2={dollarAltDark}
          title="Finance"
          eventKey="4"
        >
          {financeData.map(({ name, data }, index) => (
            <div key={index}>
              <h5
                className={classNames('mb-3 fw-bolder', {
                  'mt-4': index !== 0
                })}
              >
                {name}
              </h5>
              <SummaryTable tableData={data} />
            </div>
          ))}
        </AccordionItem>
        <AccordionItem
          img1={fileCheckAlt}
          img2={fileCheckAltDark}
          title="Policy"
          eventKey="5"
        >
          {policiesData.map(({ name, data }, index) => (
            <div key={index}>
              <h5
                className={classNames('mb-3 fw-bolder', {
                  'mt-4': index !== 0
                })}
              >
                {name}
              </h5>
              <SummaryTable tableData={data} />
            </div>
          ))}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Preview;
