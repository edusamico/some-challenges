import React from 'react'
import './UserInfo.css'
import NumbersSection from './NumbersSection'
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
                {(data.location !== null && <li>{data.location}</li>)}
                {(data.html_url !== null && <li>{data.html_url}</li>)}
                {(data.email !== null && <li>{data.email}</li>)}
                {(data.company !== null && <li>{data.company}</li>)}
            </section>
        </main>

    )
}

