import React from 'react';
import headerStyles from "../styles/Header.module.css";
function Header(props) {
    return (
        <div>
            <h1 className={headerStyles.title}><span>WebDev</span> News</h1>
            <p className={headerStyles.description}>
                Keep up to ate with the latest web dev news.
            </p>
        </div>
    );
}

export default Header;