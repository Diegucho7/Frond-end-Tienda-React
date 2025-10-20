import TodoListItem from '../project-management/todo-list/TodoListItem';
import classNames from 'classnames';
import { leadTasks } from 'data/crm/leadsData';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBox from 'components/common/SearchBox';
import { faFilter, faPlus, faSort } from '@fortawesome/free-solid-svg-icons';

const Tasks = () => {
  return (
    <div>
      <h2 className="mb-4"> Tasks</h2>
      <div className="d-flex align-items-center flex-wrap gap-x-3 gap-y-3 mb-3">
        <SearchBox placeholder="Search tasks" style={{ maxWidth: '30rem' }} />
        <div>
          <Button
            variant="link"
            className="p-0 fs-9 text-body-tertiary text-decoration-none me-3"
            startIcon={
              <FontAwesomeIcon icon={faFilter} className="fs-10 me-1" />
            }
          >
            23 tasks
          </Button>
          <Button
            variant="link"
            className="p-0 fs-9 text-primary text-decoration-none"
            startIcon={<FontAwesomeIcon icon={faSort} className="fs-10" />}
          >
            Sorting
          </Button>
        </div>
      </div>
      {leadTasks.map((todo, index) => (
        <TodoListItem
          key={todo.task}
          todo={todo}
          className={classNames('border-translucent', {
            'border-top': index === 0,
            'border-bottom-0': index === leadTasks.length - 1
          })}
          fullLayoutBreakpoints={['md', 'xxl']}
          halfLayoutBreakpoints={['xl']}
          // onClick={setSelectedItem}
        />
      ))}{' '}
      <Button
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        variant="link"
        className="text-decoration-none p-0"
      >
        Add new task
      </Button>
    </div>
  );
};
export default Tasks;
