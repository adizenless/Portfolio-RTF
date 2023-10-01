import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Map from "./Map";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2saddaa', 'template_qlhdkx9', ref.current, 'XU-k2NHfg8eOxgyxH')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
  };
  return (
    <div className="h-[150vh] md:h-screen snap-start md:snap-center px-2 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center h-full gap-10">
        <div className="flex-1 flex items-center">
          <form
            ref={ref}
            onSubmit={handleSubmit}
            className="flex flex-col w-[350px] md:w-full gap-5"
          >
            <h1 className="text-2xl mb-5">Связаться с нами</h1>
            <input
              type="text"
              placeholder="Ваше имя"
              className="p-2 rounded-sm text-gray-500"
              name='name'
            />
            <input
              type="email"
              placeholder="Ваш email"
              className="p-2 rounded-sm text-gray-500"
              name='email'
            />
            <textarea
              placeholder="Ваше сообщение"
              rows={10}
              className="p-2 rounded-sm text-gray-500"
              name='message'
            />
            <button type="Submit" className="button">
              Отправить
            </button>
            {success && "Ваше сообщение отправлено. Мы свяжимся с вами скоро:)"}
          </form>
        </div>
        <div className="flex-1 h-full">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
