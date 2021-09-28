import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { query_post, sort_Post } from "../state/reducers/posts";

const SortPost = () => {
     const [sortPrice,setSort] = useState(true)
     const [query,setQuery] = useState('')
    function SortPrice(e){
        dispatch(sort_Post(e.target.innerHTML))
        if (sortPrice){
            setSort(false)
        }
        else {
            setSort(true)
        }
    }
    function queryPost(e){
        setQuery(e.target.value)
        dispatch(query_post(e.target.value))
    }
    const dispatch = useDispatch()

    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div className='sort'>
            Сортировать по:
            <button className="sort_items" onClick={(e)=>dispatch(sort_Post(e.target.innerHTML))}>названию</button>
            {sortPrice
            ?
                <button className="sort_items" onClick={SortPrice}>цене˅</button>
            :
                <button className="sort_items" onClick={SortPrice}>цене^</button>
            }
            </div>
            <div>
                <input
                    placeholder="введите название товара"
                    value={query}
                    onChange={queryPost}
                    style={{width:250}}
                />
            </div>
        </div>
    );
};

export default SortPost;