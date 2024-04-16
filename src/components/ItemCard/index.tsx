import { itemType } from "../../store/itemType";
import { addFavoriteItem, removeFavoriteItem } from "../../store/itemSlice";
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

interface props {
    item: itemType
}
const ItemCard: React.FC<props> = ({item}) => {
    const dispatch = useDispatch();

    const changeHandler = (event: any, item: itemType) => {
        event.preventDefault();
        if(item.favorite) 
            dispatch(removeFavoriteItem(item));
        else 
            dispatch(addFavoriteItem(item));
    }

    return (
        <div className="item-card-wrapper">
            <img src={item.url} alt="" className="image-tile"></img>
            <h3>{item.id}</h3> 
            <h4>{item.title}</h4>
            <FontAwesomeIcon icon={item.favorite ? faStarSolid : faStar} className="favorite-container" onClick={e => changeHandler(e, item)} />
        </div>
    )
}

export default ItemCard;