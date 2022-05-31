import React from 'react'

import UserTitleSection from './UserTitleSection'
import DescriptionSection from './DescriptionSection'
import MoreInfoSection from './MoreInfoSection'
import NumbersSection from './NumbersSection'

import './UserInfo.css'

export const UserInfo = ({ data }) => {
    return (
        <main className='card'>
            <UserTitleSection avatar_url={data.avatar_url}
                name={data.name}
                login={data.login}
                created_at={data.created_at} />

            <DescriptionSection bio={data.bio} />

            <NumbersSection public_repos={data.public_repos}
                followers={data.followers}
                following={data.following} />

            <MoreInfoSection location={data.location}
                html_url={data.html_url}
                email={data.email}
                company={data.company} />

        </main>

    )
}

