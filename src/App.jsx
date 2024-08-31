import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import Contact from './components/Contacts/Contacts'
import SearchBox from './components/SearchBox/SearchBox '

function App() {


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
