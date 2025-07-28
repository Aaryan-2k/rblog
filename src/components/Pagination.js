import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
export default function Pagination(){
    const {pagenumber,totalpages, pageHandler}=useContext(AppContext)
    return (
        <div>
            <div className='footer'>
            {
                pagenumber>1 &&
                <button onClick={()=>pageHandler(pagenumber-1)}>Previous</button>
            }
            {
                pagenumber<totalpages &&
                <button onClick={()=>pageHandler(pagenumber+1)}>Next</button>
            }
            <span>Page {pagenumber} of {totalpages} Pages</span>
            </div>


        </div>
    )
}