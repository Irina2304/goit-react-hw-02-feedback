import { Post } from "./Notification.styled";


export const Notification = ({total}) => {
    if(!total){
        return (
            <Post>There is no feedback!</Post>
        )
    }
}