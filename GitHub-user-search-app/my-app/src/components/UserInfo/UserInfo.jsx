import React from 'react'

import NumbersSection from './NumbersSection'
import { BsFillHouseFill, BsGithub, BsBuilding, BsMailbox } from "react-icons/bs";

import './UserInfo.css'

export const UserInfo = ({ data }) => {

    const formattedDate = new Intl.DateTimeFormat('en-US',
        {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
        .format(Date.parse(data.created_at));

    return (
        <main className='card'>
            <section className='user-title'>
                <div className='avatar'>
                    <img alt="avatar" src={data.avatar_url} ></img>
                </div>
                <div className='user-info'>
                    <h1>{data.name}</h1>
                    <h2>@{data.login}</h2>
                    <h3>Joined {formattedDate}</h3>
                </div>
            </section>
            <section className='description'>
                {(data.bio !== null && <p>{data.bio}</p>)}
            </section>

            <NumbersSection public_repos={data.public_repos}
                followers={data.followers}
                following={data.following} />

            <section className='more-info'>
                {(data.location !== null && <p><BsFillHouseFill/> {data.location}</p>)}
                {(data.html_url !== null && <p><BsGithub/> {data.html_url}</p>)}
                {(data.email !== null && <p><BsMailbox/> {data.email}</p>)}
                {(data.company !== null && <p><BsBuilding/> {data.company}</p>)}                
            </section>
        </main>

    )
}

