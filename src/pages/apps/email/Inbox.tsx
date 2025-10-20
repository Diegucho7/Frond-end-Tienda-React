import EmailLayout from 'layouts/EmailLayout';
import { Col } from 'react-bootstrap';
import InboxToolbar from 'components/modules/email/InboxToolbar';
import { emails } from 'data/email';
import EmailRow from 'components/modules/email/EmailRow';
import BulkSelectProvider from 'providers/BulkSelectProvider';

const Inbox = () => {
  return (
    <EmailLayout page="inbox">
      <Col xs={12} lg>
        <div className="px-lg-1">
          <BulkSelectProvider data={emails}>
            <InboxToolbar className="inbox-toolbar" />
            {emails.map((email, index) => (
              <EmailRow index={index} email={email} key={email.id} />
            ))}
          </BulkSelectProvider>
        </div>
      </Col>
    </EmailLayout>
  );
};

export default Inbox;
