import './css/home.css';
import { Link } from 'react-router-dom';
export default function Home() {
    return (

<section className="home-container">

    <div className="background">

    </div>

    <div className="home">
        <div className="home-info">
<h1>Welcome to Rawdah Institute</h1>
<h2>“Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.”

— Jami` at-Tirmidhi 2646</h2>

    
        {/* <Link to="/OnlineClass"></Link> */}
    

        
<h3 style={{ textDecoration: 'underline'}}>
Check Out Our Latest Courses for:
        
</h3>    




<Link to="/OnlineClass">
    
    
       

       
        <button style={{fontSize: '1em', padding:'5px', backgroundColor: '#F5F5F5', fontWeight: 'bold', cursor:'pointer', borderRadius: '5px', outline: 'none'}}>
   Spring 2023
        </button>
         
      
        
        </Link>
       

        </div>

    </div>


</section>



      
    )
}