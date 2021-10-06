import PropTypes from "prop-types";

export function FriendListItem({friends}) {
    return friends.map((friend) => (
        <li className="item" key={friend.id}>
            <span className="status" style={{ backgroundColor: friends.isOnline ? "green" : "red" }}></span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
        </li>
    ));
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};








// export function FriendListItem({avatar, name, isOnline}) {
//     return (
//         <li className="item">
//             <span className="status" style={{ backgroundColor: friends.isOnline ? "green" : "red" }}>{isOnline}</span>
//             <img className="avatar" src={avatar} alt={name} width="48" />
//             <p className="name">{name}</p>
//         </li>
//     );
// }

// FriendListItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
