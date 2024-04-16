import ItemCard from "../ItemCard";
import { getItemList } from "../../store/itemSlice";
import {useSelector} from "react-redux";

const Dashboard: React.FC = () => {
    const itemList = useSelector(getItemList)?.filter(item => item.favorite);
    const favoriteList = itemList.filter(item => item.favorite)

    return (
        <div className="dashboard-container">
            {favoriteList.length === 0 && <div className="no-data">
                <h1>There are no items in favorite list yet</h1>
            </div>} 
            {favoriteList.length > 0 && <div className="favorite-list-container">
                {favoriteList.map((item) => (
                    <ItemCard item={item} key={item.id} />
                ))}        
            </div>}
        </div>
    )
}

export default Dashboard;