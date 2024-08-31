import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import toast, { Toaster } from "react-hot-toast";
import styles from './ContactForm.module.css'
export default function ContactForm () {
   const dispatch = useDispatch()
   const createContactHandler = (e)=>{
      e.preventDefault()
      const form = e.target
      if (form.name.value == '' || form.phone.value == '') {
         toast.error("Field can't be empty")
         return
      }
      dispatch(addContact({name: form.name.value,  phone: form.phone.value}));
      form.reset()
   }
   return  <form className={styles.contactForm} name='contact' onSubmit={createContactHandler}>
   <input type="text" name='name' placeholder="Name new contact" />
   <input type="number" name='phone' placeholder="Phone new contact"/>
      <button type="submit">Add contact</button>
      <Toaster/>
</form>

}