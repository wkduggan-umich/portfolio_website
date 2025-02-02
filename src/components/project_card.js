import '../styles/project_card.css'

export default function ProjectCard({name, content, link, time}) {
    return (
        <div className="project-card py-3">
            <h1 className="fs-1 underline-text">{name}</h1>
            { time && <p className=''>[{time}]</p> }
            <p className=''>{content}</p>
            <a className='link animated-underline pe-0 me-3' href={link}>See More&nbsp;<i class="bi bi-arrow-right pe-0 me-0"></i></a>
        </div>
    );
}