import React, { useState } from "react";
import ListItem from "./ListItem";
import TextValidator from "./TextValidator";

const List = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (newItem.length >= 3) {
            setItems([...items, { id: Date.now(), name: newItem }]);
            setNewItem("");
        }
    };

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div>
            <h2>Lista Pacjentów</h2>
            <TextValidator
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>Dodaj</button>
            <ul>
                {items.map((item) => (
                    <ListItem key={item.id} item={item} onRemove={removeItem} />
                ))}
            </ul>
        </div>
    );
};

export default List;