import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';
const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4ro3fcg', 'template_a8nrkiq', form.current, 'EG0ANKWSE3zH92aHB')
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
            <p className="font-bold text-xl md:text-xl lg:text-2xl text-center text-white my-10">Contact me</p>
            <div className='flex justify-center flex-col md:flex-row gap-16 md:gap-32 text-center px-5 md:px-0'>
                <div className='lg:w-1/3 mt-5'>
                    <p className="text-xl md:text-2xl md:w-auto text-white text-start md:ml-0 font-semibold mb-5">SI FAHIM</p>
                    <a className='flex items-center text-white gap-2 w-[150px]' href="https://twitter.com/dronatoo21"><FaTwitter className="text-xl lg:text-2xl text-white"/><p className='text-sm lg:text-base'>@dronatoo21</p></a>
                    <a className='flex items-center text-white gap-2 w-[150px]' href="https://www.facebook.com/profile.php?id=61555084138691"><FaFacebook className="text-xl lg:text-2xl my-2 text-white"/><p className='text-sm lg:text-base'>/shefaislamfahim</p></a>
                    <a className='flex items-center text-white gap-2 w-[150px]' href="https://github.com/dronatoo21"><FaGithub className="text-xl lg:text-2xl text-white"/><p className='text-sm lg:text-base'>/dronatoo21</p></a>
                    <a className='flex items-center text-white gap-2 w-[250px]' href="https://www.linkedin.com/in/shefa-islam-fahim/"><FaLinkedin className="text-xl lg:text-2xl text-white my-2"/><p className='text-sm lg:text-base'>in/shefa-islam-fahim</p></a>
                    <a className='flex items-center text-white gap-2 w-[250px]'><FaRegEnvelope className="text-xl lg:text-2xl text-white"/><p className='text-sm lg:text-base'>shefaislamfahim@gmail.com</p></a>
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