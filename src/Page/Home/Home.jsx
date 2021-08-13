import './home.css'
import Navbar from '../../Component/Navbar/Navbar';
import mainImg from '../../Assets/4.png';
import OlympiadExams from '../../Component/OlympiadExams/OlympiadExams';
import science from '../../Assets/science.png';
import math from '../../Assets/math.png';
import english from '../../Assets/english.png';
import finance from '../../Assets/finance.png';
import computer from '../../Assets/computer.png';
import grad from '../../Assets/grad.png';
import { Icon } from '@iconify/react';
import UserReview from '../../Component/userReview/UserReview';


export default function Home() {

    return (
        <div className="home">
                <Navbar />
            <div className="homeWrapper sectionScroll" >
                <div className="mainDetail ">
                    <h1 className="mainDetailHeading">Feeling Prepared?</h1>
                    <h1 className="mainDetailParagraph">Register for <p>Grad Olympiads</p></h1>
                    <div className="mainDetailsButton">
                        <button className="mainSchedule">Schedule</button>
                        <button className="mainRegisterNow">Register Now!</button>
                    </div>
                </div>
                <div className="homeDetailsImg">
                    <div className="homeCircle"></div>
                    <img src={mainImg} alt="" />
                </div>
            </div>
            <div className="mainNotice"></div>
            <div className="ourOlympiadsWrapper sectionScroll" >
                <h1>Our Olympiads</h1>
                <div className="ourOlympiadExams">
                    <OlympiadExams src={science} name={"SISO"} details={"The Springfield International Science Olympiad (SISO), a test of competence and knowledge in the subject of Science, is held based on syllabus prescribed by CBSE/ ICSE and the State Boards."}/>
                    <OlympiadExams src={math} name={"SIMO"} details={"The Springfield International Mathematics Olympiad (SIMO), a test of competence and knowledge in the subject of Mathematics, is held based on syllabus prescribed by CBSE/ ICSE and the State Boards."}/>
                    <OlympiadExams src={english} name={"SIEO"} details={"The Springfield International English Olympiad (SIEO), a test of competence and knowledge in the subject of English, is held based on syllabus prescribed by CBSE/ICSE and the State Boards."}/>
                    <OlympiadExams src={computer} name={"SICO"} details={"The Springfield International Cyber Olympiad (SICO), a test of competence and knowledge in the Cyber Domain, is held based on syllabus prescribed by CBSE/ICSE and the State Boards."}/>
                    <OlympiadExams src={grad} name={"Grad Olympiad"} details={"The Grads Olympiad is one of its kind Olympiad, primarily focusing on MBA aspirants. This is an online multiple-choice question based Olympiad."}/>
                    <OlympiadExams src={finance} name={"Finance Olympiad"} details={"The Finance Olympiad is a specially curated Olympiad, made with a purpose to inculcate the habit and increase the knowledge of personal finances in a fun way."}/>
                </div>
            </div>
            <div className="ourCommunityWrapper sectionScroll" >
                <h1>Our Community</h1>
                <div className="ourCommunityIcons">
                    <div className="">
                        <div className="ourCommunityCircle">
                            <Icon icon="emojione-monotone:school" className="schoolIcon"/>
                        </div>
                        <p>2000+</p>
                    </div>    
                    <div className=""><div className="ourCommunityCircle">
                        <Icon icon="noto:man-student-medium-dark-skin-tone" className="studentIcon"/>
                    </div>
                    <p>50000+</p>
                    </div>
                    <div className=""><div className="ourCommunityCircle">
                        <Icon icon="noto-v1:man-office-worker-light-skin-tone" className="workerIcon" />
                    </div>
                    <p>150+</p>
                    </div>
                </div>
                <div className="communitySignup">
                    <div className="signupInstitute">
                        <h1 className="communitySignupH1">Register as Institute</h1>
                        <p>Want to give a headstart to the students of your institute by providing them an exciting platform to test their knowledge and skills. Then, get your Institute registered with us now!</p>
                        <button>Register Now!</button>
                    </div>
                    <div className="signupCoordinator">
                        <h1 className="communitySignupH1">Register as Co-ordinator</h1>
                        <p>Grab the opportunity and get a chance to work in the education sector with one of the renowned education service providers with the option to work full time or part time. Work as a mediator between education institutes and us and Earn a handsome amount of money by working at your convenience. Top coordinators will be given to work as full-time employees with good pay.</p>
                        <button>Register Now!</button>
                    </div>
                </div>
            </div>
            <div className="aboutSpringfieldAndReview sectionScroll">
                <div className="aboutSpringfield">
                    <h1>About Springfield Olympiads</h1>
                    <div className="about-flex">
                        <div className="aboutSpringfieldDetails">
                        <p>We, at Springfield Olympiads, provide one of the best Olympiad solutions for students and working professionals and students.
                            Springfield Olympiads is an Educational Organization popularizing academic competition and assisting the development of competitive spirit among learners.</p>
                        <button>Know more</button> 
                    </div>
                    <img src="https://sfoly.com/Assets/logo.svg" alt="" />
                    </div>
                </div>
                <div className="review">
                    <h1>--User Review--</h1>
                    <div className="reviewContent">
                        <UserReview />
                        <UserReview />
                        <UserReview />
                    </div>
                </div>
            </div>
            <div className="footer sectionScroll">
                <div className="footerWrapper">
                    <h1>Contact us:</h1>
                    <h2>info@sfoly.com</h2>
                </div>
            </div>
        </div>
    )
}
