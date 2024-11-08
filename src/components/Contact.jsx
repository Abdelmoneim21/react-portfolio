import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_py79991', 'template_h7wvp8p', form.current, 'qN4o2L4n5LPV0ceLi')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    };

    return (
        <div className="contact mb-10">
            <h1 className="text-center font-semibold text-3xl sm:text-4xl border-b pb-2 border-neutral-900">Contact Me</h1>
            <div className="md:flex justify-center items-center w-full md:w-[80%] m-auto mt-10 gap-10 px-4">
                <div className="info md:w-[40%] rounded bg-slate-900 border-neutral-800 border-[4px] p-5 mb-10 md:mb-0">
                    <div className="email mb-5 mt-4">
                        <h1 className="mb-3 text-xl sm:text-2xl"><span className="text-red-700 font-extrabold mr-4">|</span>Email</h1>
                        <p className="ml-5 text-neutral-500">abdelmonemramadan9@gmail.com</p>
                    </div>
                    <div className="phone">
                        <h1 className="mb-3 text-xl sm:text-2xl"><span className="text-red-700 font-extrabold mr-4">|</span>Phone</h1>
                        <p className="text-neutral-500 ml-5">+201097003013</p>
                    </div>
                </div>
                <div className="input-form bg-slate-900 p-5 w-full md:w-[55%] rounded-lg">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                        <input type="text" name="user_name" required placeholder="Your Name *" className="w-full bg-slate-800 p-3 rounded outline-2" />
                        <input type="email" name="user_email" required placeholder="Your Email *" className="w-full bg-slate-800 p-3 rounded outline-2" />
                        <input type="text" name="subject" required placeholder="Your Subject *" className="w-full bg-slate-800 p-3 rounded outline-2" />
                        <textarea name="message" placeholder="Message *" required className="w-full bg-slate-800 p-3 rounded outline-2"></textarea>
                        <button type="submit" className="text-center mt-4 w-full md:w-[50%] mx-auto bg-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition duration-200 ease-in-out">
                            Contact
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
