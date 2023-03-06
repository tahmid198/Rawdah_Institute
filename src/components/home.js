import './css/home.css';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
<section className="home-container">
    <div className="home">

        <div className="home-info">
<h1>Welcome to Rawdah Institute</h1>

{/* <h5 style={{fontSize: '24px'}}>Our vision for Rawdah Institute is for it to become a vibrant, state-of-the-art, world-class institute</h5> */}

<h2>“Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him.”

— Jami` at-Tirmidhi 2646


</h2>

<h3 style={{fontSize: "24px" }}>
Check Out Our Latest Courses for:
        
</h3>    



<Link to="/OnlineClass">
        <button style=
        {{fontSize: '1.4em', padding:'7px 10px', 
        backgroundColor: '#F5F5F5', fontWeight: 'bold', 
        cursor:'pointer', borderRadius: '5px', outline: 'none'}}>
             Summer 2023
        </button>
        </Link>

        
        </div>

    </div>


</section>



      
    )
}

