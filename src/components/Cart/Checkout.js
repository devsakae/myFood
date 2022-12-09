import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    address: true,
    phone: true,
  });
  
  // input type="text"
  const nameInputValue = useRef();
  const addressInputValue = useRef();
  // input type="number"
  const phoneInputValue = useRef();
  // input type="checkbox"
  const whatsAppInputValue = useRef();

  // validation functions
  const isEmpty = value => value.trim() === '';
  const tooSmall = value => value.length <= 5;
  const isPhoneNumber = value => value.match(/\d/g).length >= 8;

  const submitForm = (event) => {
    event.preventDefault();
   
    const name = nameInputValue.current.value;
    const address = addressInputValue.current.value;
    const phone = phoneInputValue.current.value;
    const whatsapp = whatsAppInputValue.current.checked;

    const nameValidated = !isEmpty(name);
    const addressValidated = !tooSmall(address);
    const phoneValidated = !isEmpty(phone) && isPhoneNumber(phone);
    const formIsValid = nameValidated && addressValidated;

    setFormValidity({
      name: nameValidated,
      address: addressValidated,
      phone: phoneValidated,
    })

    if (!formIsValid) {
      return;
    }
    props.onSubmit({ name, address, phone, whatsapp })
  };

  const nameInvalidClass = `${styles.control} ${formValidity.name ? '' : styles.invalid}`
  const addressInvalidClass = `${styles.control} ${formValidity.address ? '' : styles.invalid}`
  const phoneInvalidClass = `${styles.control} ${formValidity.phone ? '' : styles.invalid}`

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={nameInvalidClass}>
        <label htmlFor='name'>Qual o seu nome?</label>
        <input type='text' id='name' ref={nameInputValue} />
      </div>
      <div className={addressInvalidClass}>
        <label htmlFor='street'>Endereço para entrega</label>
        <input type='text' id='address' ref={addressInputValue} />
      </div>
      <div className={phoneInvalidClass}>
        <label htmlFor='phone'>Telefone de contato</label>
        <input type='number' id='phone' ref={phoneInputValue} />
      </div>
      <div>
        <input type='checkbox' id='whatsapp' ref={whatsAppInputValue} />
        <label htmlFor='whatsapp'>WhatsApp?</label>
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={props.onCancel}>Cancelar</button>
        <button className={styles.submit}>Confirmar</button>
      </div>
    </form>
  );
};

export default Checkout;
