import { useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import Contact from './components/Contacts/Contacts'
import SearchBox from './components/SearchBox/SearchBox '
import { fetchContacts } from './redux/contactsOps'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch])

  return (

    <>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      <Contact/>
    </>
  )
}

export default App
