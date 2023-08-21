import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes}) {

    let string = "";
    let minutesCalculated
    if (minutes >= 30) {
        minutesCalculated = Math.round((minutes - 30) / 5);

        for (let i = 0; i < minutesCalculated; i++) {
            string = string + "🍱";
        }
    } else {
        minutesCalculated = Math.round((minutes) / 5);
        for (let i = 0; i < minutesCalculated; i++) {
            string = string + "☕️";
        }
    }
    

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{string} {minutes} min read</p>
        </article>
    )
}

export default Article