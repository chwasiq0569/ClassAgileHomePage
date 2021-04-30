import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {    
    const {t} = useTranslation();
    const [fullName, setFullName] = useState("");
    const [fullNameError, setfullNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [comment, setComment] = useState("");
    const [commentError, setCommentError] = useState("");
    const [checkNameInput, setCheckNameInput] = useState(false)
    const [checkEmailInput, setCheckEmailInput] = useState(false)
    const [checkCommentInput, setCheckCommentInput] = useState(false)

    const [validated, setValidated] = useState(false);
    const [commentValidated, setCommentValidated] = useState(false);
   
    useEffect(() => {
        setCheckNameInput(false)
        setCheckEmailInput(false)
        setCheckCommentInput(false)
    }, [])
    
    useEffect(() => {
        validateEmail();
        validateName();
        validateComment();
    }, [t('contact.email_ErrorMsg'), t('contact.firstName_ErrorMsg'), t('contact.textArea_ErrorMsg')])


    const validateEmail = () => {
            let timeout = null;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
               console.log("STOPPED TYPING")
                if(!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email) && checkEmailInput){
                    setEmailError(t('contact.email_ErrorMsg'));
                    setValidated(false);
                } else {
                    setEmailError("");
                    setValidated(true);
                }
            }, 1000);
    }

    const validateName = () => {
            let timeout = null;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
               console.log("STOPPED TYPING")
                if(fullName.length < 3 && checkNameInput){
                    setfullNameError(t('contact.firstName_ErrorMsg'))
                    setValidated(false);
                } else {
                    setfullNameError("")
                    setValidated(true);
                }
            }, 1000);
    }

    const validateComment = () => {
        let timeout = null;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
               console.log("STOPPED TYPING")
                if(comment.length < 50 && checkCommentInput){
                    setCommentError(t('contact.textArea_ErrorMsg'))
                    setCommentValidated(false);
                } else {
                    setCommentError("")
                    setCommentValidated(true);
                }
            }, 1000);
    }   

    const onFullNameChange = (e) => {
        setCheckNameInput(true)
        setFullName(e.target.value);
        validateName();    
    }

    const onEmailChange = (e) => {
        setCheckEmailInput(true)
        setEmail(e.target.value);
        validateEmail();
    }

    const onCommentChange = (e) => {
        setCheckCommentInput(true)
        setComment(e.target.value);
        validateComment();
    }


    return ( <section className="contact-section contactSecClass">
    <div className="pattern-layer" style={{backgroundImage: "url(images/background/pattern-19.png)"}} ></div>
    <div className="pattern-layer-two" style={{backgroundImage: "url(images/background/pattern-20.png)"}} ></div>
    <div className="icon-layer-two" style={{backgroundImage: "url(images/icons/icon-2.png)"}} ></div>
    <div className="icon-layer-three"  style={{backgroundImage: "url(images/icons/icon-2.png)"}} ></div>
    <div className="auto-container">
        <div className="row clearfix">
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                    <div className="icon-layer" style={{backgroundImage: "url(images/icons/icon-2.png)"}}></div>
                    <div className="image">
                        <img src={t('contact.image')} width="348px" height="303px" alt="" />
                    </div>
                    <h5>{t('contact.contactTxt')}</h5>
                    <p>{t('contact.contactDetails')}</p>
                    <ul className="contact-list">
                        <li>
                            <strong>{t('contact.phone')}</strong>
                            <a data-ga-tag={t('contact.phoneNumber')} href={t('contact.phoneNumber')}>+88 01682648101</a>
                        </li>
                        <li>
                            <strong>{t('contact.emailLabel')}</strong>
                            <a data-ga-tag={t('contact.email')} href={t('contact.email')}>hello@lebari.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            
           
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                    <div className="color-layer"></div>
                    
                    <div className="sec-title">
                        <h2>{t('contact.mainHead')}</h2>
                        <div className="text">{t('contact.details')}</div>
                    </div>
                    
                    
                    <div className="default-form">
                        <form method="post" action="contact.html">
                            <div className="row clearfix">
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" name="username" value={fullName} onChange={onFullNameChange} placeholder={t('contact.firstnameLabel')} required />
                                <p className="formError">{fullNameError}</p>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <input type="email" name="email" value={email} onChange={onEmailChange} placeholder={t('contact.emailLabel')}  required />
                                <p className="formError">{emailError}</p>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <textarea placeholder={t('contact.textAreaLabel')} value={comment} onChange={onCommentChange}></textarea>
                                    <p className="formError">{commentError}</p>
                                </div>
                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <button onClick={() => console.log("WORKING")} disabled={validated == true && commentValidated == true ? false : true} data-ga-tag="submit" type="submit" className="theme-btn btn-style-one"><span className="txt">{t('contact.submitBtnTxt')}</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
</section> );
}
 
export default Contact;