import React from 'react'
import './UserInfo.css'

export const UserInfo = ({ data }) => {

    return (
        <main className='card'>
            {data.message && "Perfil Not Found"}
            <section className='user-title'>
                <div className='avatar'>
                    <img alt="avatar" src={data.avatar_url} ></img>
                </div>
                <div className='user-info'>
                    <h1>{data.name}</h1>
                    <h2>@{data.login}</h2>
                    <h3>{data.created_at}</h3>
                </div>

            </section>
            <section className='description'>
                <p>{(data.bio !== null && data.bio) || (data.bio === null && "Bio not found")}</p>
            </section>

            <section className='numbers'>
                <div>
                    <h4>Repos</h4>
                    <p>{data.public_repos}</p>
                </div>
                <div>
                    <h4>Followers</h4>
                    <p>{data.followers}</p>
                </div>
                <div>
                    <h4>Following</h4>
                    <p>{data.following}</p>
                </div>
            </section>

            <section className='more-info'>
                <li>{(data.location !== null && data.location) || (data.location === null && "Location not found")}</li>
                <li>{(data.html_url !== null && data.html_url) || (data.html_url === null && "Profile not found")}</li>
                <li>{(data.email !== null && data.email) || (data.email === null && "E-mail not found")}</li>
                <li>{(data.company !== null && data.company) || (data.company === null && "Company not found")}</li>
            </section>
        </main>

    )
}

