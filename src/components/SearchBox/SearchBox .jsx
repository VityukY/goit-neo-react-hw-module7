import { useDispatch } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice"
import styles from './SearchBox.module.css'
export default function SearchBox () {
const dispatch = useDispatch()
const filterHandler = (e) => {
      dispatch(changeFilter(e.target.value))
   }

   return <>
      <label className={styles.queryLabel} htmlFor="query">Searching</label>
      <input className={styles.queryInput} onChange={filterHandler} type="text" name='query' placeholder="Search contact..." />
   </>
}