const DescriptionSection = ({ bio }) => (
    <section className='description'>
        {(bio !== null && <p>{bio}</p>)}
    </section>
)
export default DescriptionSection;