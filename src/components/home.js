import './css/home.css';
import { Link } from 'react-router-dom';
export default function Home() {
    return (

<section className="home-container">


    <div className="home">

        <div className="home-info">
<h1>Welcome to Rawdah Institute</h1>
<h2>“Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.”

— Jami` at-Tirmidhi 2646


</h2>



    
        {/* <Link to="/OnlineClass"></Link> */}
    

        
<h3 style={{fontSize: "24px" }}>
Sign Up For Our Latest Courses Here:
        
</h3>    


<Link to="/OnlineClass">
        <button style=
        {{fontSize: '1.4em', padding:'10px 20px', backgroundColor: '#F5F5F5', fontWeight: 'bold', cursor:'pointer',
         borderRadius: '5px', outline: 'none'}}>
   Spring 2023
        </button>
        </Link>
       

        </div>

    </div>


</section>



      
    )
}