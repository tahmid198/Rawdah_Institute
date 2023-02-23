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
<nav>
    <ul>
        <li><Link to="/OnlineClass"></Link></li>
    </ul>
</nav>
<h3>

<li><Link to="/OnlineClass">Click to see the latest classes we have to offer for Spring 2023</Link></li>

</h3>
        </div>

    </div>

</section>



      
    )
}