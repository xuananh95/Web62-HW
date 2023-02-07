import React from "react";
import FilterTodo from "./components/FilterTodo";
import FormTodo from "./components/FormTodo";
import ListTodo from "./components/ListTodo";

const TodoList = () => {
    return (
        <div>
            <FormTodo />
            <ListTodo />
            <FilterTodo />
        </div>
    );
};

export default TodoList;
