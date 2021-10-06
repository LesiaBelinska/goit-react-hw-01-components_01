import PropTypes from "prop-types";
import { FriendListItem } from './FriendListItem';

export function FriendList({friends}) {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends} />
        </ul>
    );
}








// export function FriendList({friends}) {
//     return (
//         <ul class="friend-list">
//             {friends.map(({ id, avatar, name, isOnline }) => (
//                 <FriendListItem
//                     key={id}
//                     avatar={avatar}
//                     name={name}
//                     isOnline={isOnline}
//                 />
//             ))}
//         </ul>
//     );
// }

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };