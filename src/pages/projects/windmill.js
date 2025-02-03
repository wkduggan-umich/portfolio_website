export default function Windmill() {
    return (
        <div className="text-center mt-5">
            <h1 className="fs-1 underline-text">Windmill</h1>
            <p>Skills: MATLAB, Engineering</p>
            <p className='mt-2'>In a group with 4 other engineering students, we designed, created, and tested a windmill that powered a light bulb!</p>
            {/* <div><a className="text-decoration-none" href=""><i className="bi bi-github fs-2"></i></a></div> */}
            {/* <p>Photo of windmill!</p>
            <p>Paper on windmill!</p> */}
            <a className='link animated-underline pe-0' href="/projects">Return To Projects!</a>
        </div>
    );
}