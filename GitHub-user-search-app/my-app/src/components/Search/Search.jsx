import './Search.css'
import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { UserInfo } from '../UserInfo/UserInfo'
import { api } from '../../Service/api'

export const Search = () => {
    const [textInput, setTextInput] = useState('');
    const [jsonCard, setJsonCard] = useState({});
    const [loading, setLoading] = useState(false);

    const handleOnChange = (e) => {
        setTextInput(e.target.value);
    }

    const handleClick = async () => {
        setLoading(true);
        let json = await api.getDataUser(textInput);

        if (json.message) {
            alert(`Username "${textInput}" not found. Please, try again.`)
        }

        setJsonCard(json);
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
                <UserInfo data={jsonCard}
                />)}



        </div>
    )
}

