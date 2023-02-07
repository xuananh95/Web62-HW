import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markCompleted } from "../../../redux/actions/todoActions";
import { todoListSelector } from "../../../redux/selector";

const ListTodo = () => {
    const todoList = useSelector(todoListSelector);
    const dispatch = useDispatch();
    return (
        <div>
            {todoList.map((item) => (
                <div
                    style={{
                        textDecoration: item.completed
                            ? "line-through"
                            : "none",
                    }}
                    key={item.index}
                    onClick={() => dispatch(markCompleted(item))}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default ListTodo;
