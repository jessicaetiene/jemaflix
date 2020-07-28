import React from 'react';


function ButtonLink(props) {
    //props => {className : "o que", href: "/"}
    return (
        <a className={props.className} href={props.className}>
             {props.children}
        </a>
    );
}

export default ButtonLink