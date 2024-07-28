import resume from "../pdf/Raghav'sResume.pdf"

const Resume = () => {
    return <>
        <div className="card mb-3 container  " id="resume">
            <div className="card-header">
                <h2>Resume</h2>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center m-3">
                    <iframe className="pdf" src={resume} width="800" height="800" />
                </div>
                <div className="col-12 m-3 resume ">
                    <a href={resume} download="Raghav'sResume.pdf">
                        <button type="button" className="btn btn-secondary btn-lg py-2">Downlord</button>
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Resume