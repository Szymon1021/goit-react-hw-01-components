import { Profile } from 'components/Profil/Profil.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';

import user from 'components/Profil/user.json';
import data from 'components/Statistics/data.json';
import friend from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
         <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics
      title="Upload stats"
      stats = {data}
    />
    <FriendList friends={friend} />
    <TransactionHistory items={transactions}/>
    </>
  );
};

