import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setStatus } from "../../../redux/actions/filterActions";
import { searchSelector } from "../../../redux/selector";

const FilterTodo = () => {
    const dispatch = useDispatch();
    const search = useSelector(searchSelector);
    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            <button
                onClick={() => {
                    dispatch(setStatus("all"));
                }}
            >
                All
            </button>
            <button
                onClick={() => {
                    dispatch(setStatus("completed"));
                }}
            >
                Completed
            </button>
            <button
                onClick={() => {
                    dispatch(setStatus("notCompleted"));
                }}
            >
                Not Completed
            </button>
        </div>
    );
};

export default FilterTodo;
