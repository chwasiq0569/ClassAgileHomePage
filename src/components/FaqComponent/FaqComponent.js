import React from 'react';
import QuestionsCol from './QuestionsCol/QuestionsCol';
import { useTranslation } from 'react-i18next';

const FaqComponent = () => {
    const {t} = useTranslation();

    return ( <section className="faq-section faqContent" style={{backgroundColor: "#F3FEF9"}}>
    <div className="auto-container">
        <div className="row clearfix">
            <QuestionsCol side="leftSide" />
            <QuestionsCol side="rightSide" />
        </div>
    </div>
</section> );
}
 
export default FaqComponent;