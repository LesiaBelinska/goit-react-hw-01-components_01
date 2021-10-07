import { FriendListItem } from './FriendListItem';
import s from './FriendList.module.css';

export function FriendList({ friends }) {
    return (
        <ul className={s.friends}>
            <FriendListItem friends={friends} />
        </ul>
    );
}






