import React, { FC, useMemo } from 'react';
import { UserRanking } from '../typings';
import { categories } from '../util/subjectTable';

interface Props {
  user: UserRanking;
  rank: number;
}

const UserRankingCard: FC<Props> = ({ user, rank }) => {
  const subjectInfo = useMemo(() => categories.find((c) => c.title === user.subject), [user.subject]);
  return (
    <div className='user-ranking-card flex justify-between items-center p-2'>
      <div className='flex items-center gap-2'>
        <span className='font-bold text-xl min-w-[12px]'>{rank}</span>
        <img src={user.profileUrl ? user.profileUrl : '/assets/images/avatar.svg'} alt='user-avatar' />
        <h2>{user.nickname}</h2>
      </div>
      <div className='flex items-center gap-2'>
        <span>{user.win}승</span>
        <img
          src={subjectInfo ? subjectInfo.icon : '/assets/images/category/all.svg'}
          alt={user.subject}
          className='w-[24px] object-cover'
        />
      </div>
    </div>
  );
};

export default UserRankingCard;
