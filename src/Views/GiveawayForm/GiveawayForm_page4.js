import React, {useState} from 'react';
import {FooterButtonStyled} from "../../components/Button/Button.styles";

const GiveawayFormPage4 = ({functions, props}) => {
    const [type, bags, localization, helpGroup, street, city, postCode, phone, date, hour, comment] = props;
    const [handleStreet, handleCity, handlePhone, handlePostCode, handleDate, handleComment,
        handleHour] = functions;
    const [streetError, setStreetError] = useState();
    const [cityError, setCityError] = useState();
    const [postCodeError, setPostCodeError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [hourError, setHourError] = useState();

    const handleSubmit = () => {
        if (street.length < 2){setStreetError('Niepoprawna nazwa ulicy')
        } else {setStreetError(null)}

        if (city.length < 2){setCityError('Niepoprawna nazwa miasta')
        } else {setCityError(null)}

        const reg=/^[0-9]{3}(?:-[0-9]{2})?$/;
        if (reg.test(postCode)){setPostCodeError(null)
        } else {setPostCodeError('Niepoprawny kod pocztowy')}

        if (phone.length !== 9){setPhoneError('Niepoprawna nazwa ulicy')
        } else {setPhoneError(null)}

        const regTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
        if (regTime.test(hour)){setHourError(null)
        } else {setHourError('Niepoprawna godzina')}
    };

    const style = {
        color: 'red',
        fontSize: '.8rem',
        fontWeight: '700'
    };

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
                        {streetError ? <p style={style}>{streetError}</p> : ''}
                        <div className={'input__address__element'}>
                            <label>Miasto</label>
                            <input type='text' value={city} onChange={handleCity}/>
                        </div>
                        {cityError ? <p style={style}>{cityError}</p> : ''}
                        <div className={'input__address__element'}>
                            <label>Kod pocztowy</label>
                            <input type='text' value={postCode} onChange={handlePostCode}/>
                        </div>
                        {postCodeError ? <p style={style}>{postCodeError}</p> : ''}
                        <div className={'input__address__element'}>
                            <label>Numer telefonu</label>
                            <input type='text' value={phone} onChange={handlePhone}/>
                        </div>
                        {phoneError ? <p style={style}>{phoneError}</p> : ''}
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
                        {hourError ? <p style={style}>{hourError}</p> : ''}
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
                        left: '12rem'}} onClick={handleSubmit}>Dalej</FooterButtonStyled>
                </div>
            </div>
        </div>
    );
};

export default GiveawayFormPage4;