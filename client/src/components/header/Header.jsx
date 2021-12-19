import "./header.css"


const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm"> React & Node</span>
                <span className="headerTitleLg"> BLOG </span>
            </div>
            <img
                className="headerImg"
                src="https://wallpapercave.com/wp/wp2552001.jpg" alt="header" />
        </div>

    );
}

export default Header;
