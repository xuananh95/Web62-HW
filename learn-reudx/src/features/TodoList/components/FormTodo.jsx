import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "../../../redux/actions/todoActions";

const FormTodo = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(
                        addTodoList({
                            index: new Date().toISOString(),
                            name: name,
                            completed: false,
                        })
                    );
                }}
            >
                Add
            </button>
        </div>
    );
};

export default FormTodo;
