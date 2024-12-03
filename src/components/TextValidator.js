import React from "react";

const TextValidator = ({ value, onChange }) => {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Wpisz nazwę pacjenta"
            />
            {value.length > 0 && value.length < 3 && (
                <p style={{ color: "red" }}>Tekst musi mieć co najmniej 3 znaki</p>
            )}
        </div>
    );
};

export default TextValidator;
