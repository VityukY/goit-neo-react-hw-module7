import { useDispatch, useSelector } from "react-redux"
import { addContact, removeContact } from "../../redux/contactsSlice";
import { changeFilter } from "../../redux/filtersSlice";

export default function Contacts () {
   const contacts = useSelector((state)=> state.contacts.items);
   const filter = useSelector((state)=> state.filter.filters.name);

   console.log('filter :>> ', filter);

   const dispatch = useDispatch();

   const filterHandler = (e) => {
      dispatch(changeFilter(e.target.value))
   }
   const createContactHandler = (e)=>{
      e.preventDefault()
      const form = e.target
      dispatch(addContact({name: form.name.value,  phone: form.phone.value}));
      form.reset()
   }
   const handleDelete = (id) =>
      dispatch(removeContact(id))
   const getVisibleContacts = () => {
      return contacts.filter((contact)=> contact.name.toLowerCase().includes(filter))
   }

   const visibleContact=  getVisibleContacts ()

   
   return <>
   <div>Contact component</div>
   <form name='contact' onSubmit={createContactHandler}>
      <h2>Add contact form</h2>
      <input type="text" name='name' placeholder="Name new contact" />
      <input type="number" name='phone' placeholder="Phone new contact"/>
      <button type="submit">Create contact</button>
   </form>

   <br />
   <label htmlFor="query">Searching</label>
   <br />
   <input onChange={filterHandler} type="text" name='query' placeholder="Search contact..." />
   {contacts.length>0&&
   <ul>
      {visibleContact.map(contact => {
         return <li key={contact.id}>
            Name: {contact.name}
            <br />
            Phone: {contact.phone}
            <button onClick={()=>handleDelete(contact.id)}>Remove contact</button>
         </li>
      })}
   </ul>
   
   }
   </>
}