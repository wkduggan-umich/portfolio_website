// import SkillCard from '../components/skill_card'
import MyImage from '../img/IMG_1795.jpeg'
import MyImage1 from '../img/IMG_2229.JPG'
import MyImage2 from '../img/IMG_2351.JPG'
import MyImage3 from '../img/IMG_2244.JPG'

import "../styles/home.css"; // Import CSS for styling

const Home = () => {
  return (
    <div className="h-100">
        <div className="container">
            <section id="section1" className="justify-content-between section" style={{height: "90vh"}}>
                <div className="d-flex flex-row align-items-center">
                    <div className="text-content flex-item mt-5">
                        <h1>Hi, I'm Will!</h1>
                        <p className="fs-5">
                            I'm a third year computer science and math student in the University of Michigan engineering school. I'm currently a software developer at&nbsp;
                            <a className="text-decoration-none" href="https://www.simio.com" target="_blank" rel="noopener noreferrer">Simio</a> 
                            &nbsp;and the director of computer science at&nbsp;
                            <a className="text-decoration-none" href="https://www.mzbtutors.com/michigan-mentors" target="_blank" rel="noopener noreferrer">Michigan Mentors</a>.
                        </p>
                        <p className="fs-5">
                            Some parts of this website are still being worked on but feel free to explore it in the meantime!
                        </p>
                    </div>

                    <div className="image-content mt-5 ms-4 flex-item">
                        <img src={MyImage} alt="" width="90%" />
                    </div>
                </div>
                
                <div className="">
                    <button className="btn fs-3 shake-icon pt-3" onClick={() => scrollToSection("section2")}>
                        <i className="bi bi-chevron-down"></i>
                    </button>
                </div>
            </section>

            <section id="section2" className="justify-content-between section">
                <div className="d-flex flex-row align-items-center pt-5">
                    <div className="text-content flex-item mt-5">
                        <h1>About Me</h1>
                        <p className="fs-5">
                            I'm an aspiring software engineer interested in solving complex technical problems. Some of my specific interests include climate tech, cybersecurity, educational tech, and more. I love to work in collaborative teams and to get my head in the weeds!
                        </p>
                        <p className="fs-5">
                            In my free time, I love to <a className="text-decoration-none" href="https://www.goodreads.com/review/list/180977465-will-duggan?order=d&shelf=currently-reading" target="_blank" rel="noopener noreferrer">read</a>, 
                            &nbsp;<a className="text-decoration-none" href="https://open.spotify.com/user/31rtepq6ewbrsn7ozgk2yc4e2gei?si=21c97437b0dc47af" target="_blank" rel="noopener noreferrer">listen to music</a>, attempt to&nbsp;
                            <a className="text-decoration-none" href="https://www.songsterr.com/a/wsa/dire-straits-down-to-the-waterline-tab-s30094" target="_blank" rel="noopener noreferrer">play the guitar</a>, travel, spend time outdoors, and play hockey!
                        </p>
                        <p className="fs-5">
                            Feel free to contact me at <a className="text-decoration-none" href="mailto:wkduggan@umich.edu">wkduggan@umich.edu</a>!
                        </p>
                    </div>

                    <div className="layered-image">
                        <img src={MyImage1} alt="" className="img img1"/>
                        <img src={MyImage2} alt="" className="img img2"/>
                        <img src={MyImage3} alt="" className="img img3"/>
                    </div>
                </div>
                {/* <h2 className="pt-5">Languages</h2>

                <div>
                    <div className="row g-4">
                        <SkillCard skill="C++" content="I've led a introductory C++ course at Michigan Mentors!" course_work="Data Structures and Algorithms (EECS 280/281)"/>
                        <SkillCard skill="C#" content="I work in a C# envrioment at Simio!"/>
                        <SkillCard skill="JavaScript" content="I created this website using React.JS!"/>
                        <SkillCard skill="Python" content="As a software developer at Chitown Tutors, I created a custom autograding system in Python!" course_work="Practical Data Science (EECS 398)"/>
                        <SkillCard skill="C" course_work="Computer Organization (EECS 370)"/>
                        <SkillCard skill="Go" course_work="Distributed Systems (EECS 491)"/>
                        <SkillCard skill="R" course_work="Statistics and Data Analysis (STATS 250)"/>
                        <SkillCard skill="HTML/CSS" contnet="At Simio, I create web components using a combination of HTML/CSS in a Blazor envrioment!"/>
                    </div>
                </div>

                <div className="pt-3">
                    <button className="btn fs-3" onClick={() => scrollToSection("section3")}>
                        <i className="bi bi-chevron-down shake-icon"></i>
                    </button>
                </div> */}
            </section>
            
            {/* <section id="section3" className="justify-content-between section">
                <h2 className="pt-5">Frameworks, Libraries, Technologies</h2>

                <div>
                    <div className="row g-4">
                        <SkillCard skill="Blazor/ASP.NET Core" content="I work in a C# Blazor/ASP.NET Core envrioment at Simio!"/>
                        <SkillCard skill="Pandas" course_work="Practical Data Science (EECS 398)"/>
                        <SkillCard skill="Numpy" course_work="Practical Data Science (EECS 398)"/>
                        <SkillCard skill="Bootstrap" content="I have practice with Bootstrap at Simio. This website was also made using Bootstrap!"/>
                        <SkillCard skill="Git" />
                        <SkillCard skill="Visual Studio/VS Code" />
                        <SkillCard skill="React.js" content="I created this website using React.JS!"/>
                        <SkillCard skill="Google Cloud" />
                    </div>
                </div>

                <div className="pt-4">
                    <button className="btn fs-3" onClick={() => scrollToSection("section4")}>
                        <i className="bi bi-chevron-down shake-icon"></i>
                    </button>
                </div>
                <div></div>
            </section> */}
        </div>
    </div>
    
  );
};

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

export default Home;
