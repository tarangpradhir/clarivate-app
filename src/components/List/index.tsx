import {useEffect, memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addItemList, getItemList, getPage, setPage } from "../../store/itemSlice";
import InfiniteScroll from 'react-infinite-scroll-component';
import ItemCard from "../ItemCard";
import { API_URL } from "../../utils";

const List: React.FC = memo(function List() {
    const dispatch = useDispatch();
    const itemList = useSelector(getItemList);
    const page = useSelector(getPage);

    useEffect(() => {
        if(itemList.length === 0)
            fetchData();
    }, [])

    const fetchData = async() => {
        const response = await fetch(`${API_URL}${page}&amp;_limit=10`);
        const data = await response.json();
        dispatch(setPage(page + 1));
        dispatch(addItemList(data));
    }

    return (
        <div className="list-container" id="scrollableDiv">
                <InfiniteScroll
                    dataLength={itemList.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    {itemList.map((item, index) => (
                        <ItemCard item={item} key={index} />
                    ))}
                </InfiniteScroll>
        </div>
    )
})

export default List;