import PropTypes from "prop-types";
import styles from "./FriendList.module.css"



export const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, name, avatar, isOnline }) => (
      <li key={id} className={styles.item}>
        <span className={isOnline ? styles.active : styles.inActive} ></span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
  </ul>
  
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}