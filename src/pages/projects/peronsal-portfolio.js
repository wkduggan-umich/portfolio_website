export default function PersonalPortfolio() {
    return (
        <div className="text-center mt-5">
            <h1 className="fs-1 underline-text">Personal Portfolio</h1>
            <p>Skills: JS, React.js, HTML/CSS, Bootstrap</p>
            <p className='mt-2'>I'm currently working on this personal portfolio website!</p>
            <div><a className="text-decoration-none" href="https://github.com/wkduggan-umich/portfolio_website" target="_blank" rel="noopener noreferrer"><i className="bi bi-github fs-2"></i></a></div>
            <a className='link animated-underline pe-0' href="/projects">Return To Projects!</a>
        </div>
    );
}