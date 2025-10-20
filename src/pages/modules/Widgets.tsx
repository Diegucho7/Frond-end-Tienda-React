import ScrollSpy from 'components/base/ScrollSpy';
import WidgetECommerce from 'components/modules/widgets/WidgetECommerce';
import WidgetForms from 'components/modules/widgets/WidgetForms';
import WidgetOthers from 'components/modules/widgets/WidgetOthers';
import WidgetStats from 'components/modules/widgets/WidgetStats';
import WidgetTables from 'components/modules/widgets/WidgetTables';
import WidgetUserAndFeed from 'components/modules/widgets/WidgetUserAndFeed';
import WidgetsScrollspyNav from 'components/modules/widgets/WidgetsScrollspyNav';

const Widgets = () => {
  return (
    <div className="mb-9">
      <ScrollSpy>
        <WidgetsScrollspyNav />

        <ScrollSpy.Content id="stats" className="widgets-scrollspy">
          <WidgetStats />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="tables" className="widgets-scrollspy">
          <WidgetTables />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="e-commerce" className="widgets-scrollspy">
          <WidgetECommerce />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="users-and-feed" className="widgets-scrollspy">
          <WidgetUserAndFeed />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="forms" className="widgets-scrollspy">
          <WidgetForms />
        </ScrollSpy.Content>

        <ScrollSpy.Content id="others" className="widgets-scrollspy">
          <WidgetOthers />
        </ScrollSpy.Content>
      </ScrollSpy>
    </div>
  );
};

export default Widgets;
