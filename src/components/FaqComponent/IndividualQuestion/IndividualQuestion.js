import React from 'react';

const IndividualQuestion = ({item}) => {
    return (  <li key={item.question} className="accordion block">
    <div data-ga-tag={item.question} className="acc-btn">{item.question} <div className="icon fa fa-angle-down"></div></div>
    <div className="acc-content">
        <div className="content">
            <div className="text">
                <p>{item.answer}</p>
            </div>
        </div>
    </div>
</li> );
}
 
export default IndividualQuestion;