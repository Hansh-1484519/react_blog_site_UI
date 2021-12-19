import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img
            className="writeImg" 
            src="https://thumbs.dreamstime.com/b/magical-mountain-landscape-great-view-pizes-de-cir-ridge-valley-gardena-national-park-dolomites-south-tyrol-location-185631959.jpg" alt="Desktop" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>

                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Tell your story !" 
                    type="text"
                    className="writeInput writeText"
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>

        </div>
    )
}
