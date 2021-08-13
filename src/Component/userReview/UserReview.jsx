import './userreview.css';

export default function UserReview() {
    return (
        <div className="userReview">
            <div className="userReviewWrapper">
                <img src="https://img.freepik.com/free-photo/portrait-young-student-happy-be-back-university_23-2148586559.jpg?size=626&ext=jpg" alt="" />
                <p className="username">Muskan Thakur</p>
                <p className="userStatus">Student</p>
                <p className="userFeedback">
                    Overall exam was conducted smoothly and report was analytically given.
                </p>
            </div>
        </div>
    )
}
