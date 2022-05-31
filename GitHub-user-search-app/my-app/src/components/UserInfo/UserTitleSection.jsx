const UserTitleSection = ({ avatar_url, name, login, created_at }) => {
    const formattedDate = new Intl.DateTimeFormat('en-US',
        {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
        .format(Date.parse(created_at));

    return (
        <section className='user-title'>
            <div className='avatar'>
                <img alt="avatar" src={avatar_url} ></img>
            </div>
            <div className='user-info'>
                <h1>{name}</h1>
                <h2>@{login}</h2>
                <h3>Joined {formattedDate}</h3>
            </div>
        </section>
    )
}


export default UserTitleSection;