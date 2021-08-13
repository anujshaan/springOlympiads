import './olympiadExam.css'

export default function OlympiadExams({src,name,details}) {
    return (
        <div className="olympiadexams">
            <img src={src} alt="" />
            <p className="olympiadExamName">{name}</p>
            <p className="examsDetails">
                {details}
            </p>
            <button>Know more</button>            
        </div>
    )
}
