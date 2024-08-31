import { useDispatch, useSelector } from "react-redux"
import { removeContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from './Contacts.module.css'
export default function Contacts () {
   const selectContacts  = useSelector((state)=> state.contacts.items);
   const selectNameFilter  = useSelector((state)=> state.filter.filters.name);
   const dispatch = useDispatch();

   const handleDelete = (id) =>
      dispatch(removeContact(id))

   const visibleContacts = selectContacts.filter(contact =>
      contact.name.toLowerCase().includes(selectNameFilter )
    );

   return <>
   {selectContacts.length>0&&
   <ul className={styles.contactList}>
      {visibleContacts.map(contact => {
         return <li className={styles.contactListItem} key={contact.id}>
            <Contact contact={contact} handleDelete={handleDelete}/>
         </li>
      })}
   </ul>
   }
   </>
}