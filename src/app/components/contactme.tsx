import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

interface IFormInput {
  user_name: string;
  user_email: string;
  phone: string;
  message: string;
}

export default function Contactme() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false)
  const { reset, register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    var templateParams = {
      from_name: data.user_email ,
      message: `Nombre: ${data.user_name}, ${data.message}`,
    };
    emailjs.send('service_kdi8p2v', 'template_6fzl7ge', templateParams, 'FudkQNjkySXUxvHSx')
      .then(
        () => {
          setLoading(true)
          toast.success('El mensaje fue enviado con éxito', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          reset();
        },
        (error) => {
          toast.error('Ha ocurrido un error al enviar el mensaje!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log('FAILED...', error.text);
        }
      ).finally(()=>{
        setLoading(false)
      });
  };
useEffect(()=>{
  emailjs.init({
    publicKey: "FudkQNjkySXUxvHSx",
  });
},[])
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section id="contact" data-aos="fade-up"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
        className='sm:max-w-[80%] md:max-w-[80%] xl:max-w-[50%] lg:max-w-[70%] 2xl:max-w-[45%] flex flex-col max-w-[100%] items-center justify-center gap-10 m-auto h-screen p-10'>
        <h2 className='text-[4rem] font-[700] text-text-color animate-bounce animate-infinite'>Contacta<span className=' text-main-color'>me</span></h2>
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className=' w-full flex flex-col gap-6 items-center justify-center p-10 shadow-lg'>
          <div className='w-full'>
            <input
              className='w-full h-16 p-4 shadow-md'
              type='text'
              placeholder='tu nombre completo'
              {...register("user_name", { required: true })}
              aria-invalid={errors.user_name ? "true" : "false"}
            />
            {errors.user_name?.type === "required" && (
              <p className='text-red-600 animate-jump' role="alert">*El campo nombre completo es requerido</p>
            )}
          </div>
          <div className=' w-full grid grid-cols-1'>
            <div>
              <input
                className='w-full h-16 p-4 shadow-md'
                type='email'
                placeholder='tu email'
                {...register("user_email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "*El correo ingresado no es válido"
                  }
                })}
              />
              {errors.user_email?.type === "required" && (
                <p className='text-red-600 animate-jump' role="alert">*El campo email es requerido</p>
              )}
              {errors.user_email && <p className='text-red-600 animate-jump'>{errors.user_email.message}</p>}
            </div>
          </div>
          <div className='w-full mb-6'>
            <textarea
              className='w-full h-60 p-4 shadow-md'
              placeholder='Tu mensaje'
              {...register("message", { required: true })}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message?.type === "required" && (
              <p className='text-red-600 animate-jump' role="alert">*El campo mensaje es requerido</p>
            )}
          </div>
          <button className=' pl-9 pr-9 pt-3 pb-3 bg-main-color text-[1.7rem] text-white rounded-lg'>{loading ? 'Cargando...': 'Enviar mensaje'}</button>
        </form>
      </section>
    </>
  );
}