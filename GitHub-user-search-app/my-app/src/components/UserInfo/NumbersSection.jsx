const NumbersSection = ({ public_repos, followers, following }) => (
    <section className='numbers'>
        <div>
            <h4>Repos</h4>
            <p>{public_repos}</p>
        </div>
        <div>
            <h4>Followers</h4>
            <p>{followers}</p>
        </div>
        <div>
            <h4>Following</h4>
            <p>{following}</p>
        </div>
    </section>)

export default NumbersSection;