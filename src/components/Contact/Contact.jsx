import styles from './Contact.module.css'
export default function Contact({ contact, handleDelete }) {
   return <>
         <p className={styles.contactField}>Name:{contact.name}</p>
         <p className={styles.contactField}> Phone:{contact.number} </p>
         <button className={styles.contactButton} onClick={() => handleDelete(contact.id)}>Remove</button>
   </>
}