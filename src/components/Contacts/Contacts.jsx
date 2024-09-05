import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact";
import styles from './Contacts.module.css'
import { deleteContact } from "../../redux/contactsOps";
import {DNA} from 'react-loader-spinner'
import { selectedError, selectContacts, selectedIsLoading, selectFilteredContacts } from "../../redux/selectors";

export default function Contacts () {
   const contacts  = useSelector(selectContacts);
   const isLoading = useSelector(selectedIsLoading);
   const error = useSelector(selectedError)
   const visibleContacts = useSelector(selectFilteredContacts )
   const dispatch = useDispatch();

   const handleDelete = (id) =>
      dispatch(deleteContact(id));


   return <>
   {isLoading&&<DNA/>}
   {error&&<p>Error happend</p>}
   {contacts.length>0&&
   <ul className={styles.contactList}>
      {visibleContacts.map(contact => {
         return <li className={styles.contactListItem} key={contact.id}>
            <Contact contact={contact} handleDelete={(handleDelete)}/>
         </li>
      })}
   </ul>
   }
   </>
}