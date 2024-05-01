import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';
const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l0pmbh1', 'template_0hi7g9j', form.current, '_dzfusUuJKpRjr6od')
        .then((result) => {
            console.log(result);
            if(result.text === "OK"){
                Swal.fire({
                    title: "Successfully sent message",
                    text: "To SI Fahim",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id='contact' className='mb-24'>
            <h1 className="font-bold text-3xl text-center text-white my-10">Contact me</h1>
            <div className='flex justify-center flex-col md:flex-row gap-16 md:gap-32 text-center px-5 md:px-0'>
                <div className='lg:w-1/3 mt-5'>
                    <h1 className="text-xl md:text-2xl md:w-auto text-white text-start md:ml-0 font-semibold mb-5">SI FAHIM</h1>
                    <a className='flex items-center text-white gap-2 w-[150px]' href="https://twitter.com/dronatoo21"><FaTwitter className="text-2xl text-white"/><p>@dronatoo21</p></a>
                    <a className='flex items-center text-white gap-2 w-[150px]' href="https://www.facebook.com/profile.php?id=61555084138691"><FaFacebook className="text-2xl my-2 text-white"/><p>/shefaislamfahim</p></a>
                    <a className='flex items-center text-white gap-2 w-[150px]' href="https://github.com/dronatoo21"><FaGithub className="text-2xl text-white"/><p>/dronatoo21</p></a>
                    <a className='flex items-center text-white gap-2 w-[250px]' href="https://www.linkedin.com/in/shefa-islam-fahim/"><FaLinkedin className="text-2xl text-white my-2"/><p>in/shefa-islam-fahim</p></a>
                    <a className='flex items-center text-white gap-2 w-[250px]'><FaRegEnvelope className="text-2xl text-white"/><p>shefaislamfahim@gmail.com</p></a>
                </div>
                <div className='lg:w-1/3'>
                    <form className='text-white flex flex-col text-start' ref={form} onSubmit={sendEmail}>
                      <label>Name</label>
                      <input className='text-black p-2 rounded-md' type="text" placeholder='Name' name="user_name" required/>
                      <label>Email</label>
                      <input className='text-black p-2 rounded-md' type="email" placeholder='E-mail' name="user_email" required/>
                      <label>Message</label>
                      <textarea className='text-black p-2 rounded-md' name="message" placeholder='Message' />
                      <input className='btn btn-neutral bg-[#c8d5e5] my-3 text-black border-none' type="submit" value="Send" required/>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ContactMe;