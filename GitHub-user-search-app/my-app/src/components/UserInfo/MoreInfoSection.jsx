import { BsFillHouseFill, BsGithub, BsBuilding, BsMailbox } from "react-icons/bs";

const MoreInfoSection = ({ location, html_url, email, company }) => (
    <section className='more-info'>
        {(location !== null && <p><BsFillHouseFill /> {location}</p>)}
        {(html_url !== null && <p><BsGithub /> {html_url}</p>)}
        {(email !== null && <p><BsMailbox /> {email}</p>)}
        {(company !== null && <p><BsBuilding /> {company}</p>)}
    </section>
)
export default MoreInfoSection;