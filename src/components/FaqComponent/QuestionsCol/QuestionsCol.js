import React from 'react';
import IndividualQuestion from './../IndividualQuestion/IndividualQuestion';
import { useTranslation } from 'react-i18next';

const QuestionsCol = ({side}) => {
    const {t} = useTranslation();

    return ( <div className="column col-lg-6 col-md-12 col-sm-12">
    {/* <div className="title-box">
        <h4>Primary FAQ</h4>
    </div> */}

    <ul className="accordion-box">
        {
            side === "leftSide" ? (t('faq.faqItemsLeft', { returnObjects: true }).map(item => (
                    <IndividualQuestion item={item} />
            ))) : (t('faq.faqItemsRight', { returnObjects: true }).map(item => (<IndividualQuestion item={item} />)))
        }
    </ul>
</div> );
}
 
export default QuestionsCol;