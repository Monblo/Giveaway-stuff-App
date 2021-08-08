import React, {useState} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";

const GiveawayFormPage4 = ({functions, props}) => {
    const [street, city, postCode, phone, date, hour, comment] = props;
    const [handleStreet, handleCity, handlePhone, handlePostCode, handleDate, handleComment,
        handleHour] = functions;

    return (
        <div>
            <div className={'alert__field'}>
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div className={'giveaway__form'}>
                <p>Krok 4/4</p>
                <h2>Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                <div className={'input__data'}>
                    <div className={'input__address'}>
                        <h3>Adres odbioru:</h3>
                        <div className={'input__address__element'}>
                            <label>Ulica</label>
                            <input type='text' value={street} onChange={handleStreet}/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Miasto</label>
                            <input type='text' value={city} onChange={handleCity}/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Kod pocztowy</label>
                            <input type='text' value={postCode} onChange={handlePostCode}/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Numer telefonu</label>
                            <input type='text' value={phone} onChange={handlePhone}/>
                        </div>
                    </div>
                    <div className={'input__address'}>
                        <h3>Termin odbioru:</h3>
                        <div className={'input__address__element'}>
                            <label>Data</label>
                            <input type='text' value={date} onChange={handleDate}/>
                        </div>
                        <div className={'input__address__element'}>
                            <label>Godzina</label>
                            <input type='text' value={hour} onChange={handleHour}/>
                        </div>
                        <div className={'input__address__element '}>
                            <label className={'label__supplier'}>Uwagi <br/>dla kuriera</label>
                            <textarea className={'input__supplier'} value={comment} onChange={handleComment}/>
                        </div>
                    </div>
                </div>
                <div>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem'}}>Wstecz</FooterButtonStyled>
                    <FooterButtonStyled style={{backgroundColor:'transparent',
                        position:'absolute',
                        bottom:'7rem',
                        left: '12rem'}}>Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage4;