import React, { useState } from 'react'

import { Button } from '../Button/Button'
import { UserInfo } from '../UserInfo/UserInfo'
import { api } from '../../services/api'
import { Modal } from "../Modal/Modal";

import './Search.css'

export const Search = () => {
    const [textInput, setTextInput] = useState('');
    const [jsonCard, setJsonCard] = useState({});
    const [loading, setLoading] = useState(false);
    const [isModelVisible, setIsModalVisible] = useState(false);

    const handleOnChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        let json = await api.getDataUser(textInput);
        setJsonCard(json);
        json.message ? setIsModalVisible(true) : setIsModalVisible(false);
        setLoading(false);

    }
    return (
        <div>
            <form>
                <input placeholder='Search GitHub username...' onChange={handleOnChange} autoFocus={true} type="search"></input>
                <Button
                    onClick={(handleClick)}
                    text={(loading) ? "Wait" : "Search"}
                />
            </form>

            {(!loading && jsonCard.login === textInput &&
                <UserInfo data={jsonCard} />)}
            {(isModelVisible ? (<Modal message={jsonCard.message} onClose={() => setIsModalVisible(false)} />) : null)}

        </div>
    )
}

