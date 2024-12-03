import React from "react";
import "./ListItem.css";

const ListItem = ({ item, onRemove }) => {
    return (
        <li className="list-item">
            <span>{item.name}</span>
            <button onClick={() => onRemove(item.id)}>Usuń</button>
        </li>
    );
};

export default ListItem;