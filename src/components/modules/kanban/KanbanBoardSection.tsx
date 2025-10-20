import KanbanBoardCard from 'components/modules/kanban/KanbanBoardCard';
import { KanbanBoard } from 'data/kanban';
import { Link } from 'react-router';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'components/base/Swiper';
import KanbanAddBoardCard from './KanbanAddBoardCard';

interface KanbanBoardSectionProps {
  title: string;
  description: string;
  boards: KanbanBoard[];
  changePreference?: boolean;
}

const KanbanBoardSection = ({
  title,
  description,
  boards,
  changePreference
}: KanbanBoardSectionProps) => {
  return (
    <div className="px-4 px-lg-6 py-5 border-bottom border-translucent">
      <h4>{title}</h4>
      <p className="mb-4">
        {description}{' '}
        {changePreference && <Link to="#!">Change preference</Link>}
      </p>

      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        speed={800}
        breakpoints={{
          576: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          },
          1540: {
            slidesPerView: 4
          }
        }}
      >
        {boards.map(board => (
          <SwiperSlide key={board.id}>
            <KanbanBoardCard board={board} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <KanbanAddBoardCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default KanbanBoardSection;
