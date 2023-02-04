import React from 'react';
import  './css/online-class.css';

export default function OnlineClass(){
    return (
        <section className='sec-container' >
            <div className='title'>
                <div className='title-info'>
                    <h1>Online Classes</h1>
                        <p>Summer 2023</p>
                </div>
            </div>
            <div className='schedule'>
                <div className='schedule-title'>
                    <h1>SUMMER 2023 SCHEDULE</h1>
                </div>
                <div class="grid-container">
                    <div class="grid-item">FRIDAY</div>
                    <div class="grid-item">SATURDAY</div>
                    <div class="grid-item">SUNDAY</div>
                    <div class="grid-item">SUNNAH PRAYERS 10AM - 11AM</div>
                    <div class="grid-item">TAFSIR OF SHORT SURAHS 11:15AM - 12:15PM</div>
                    <div class="grid-item">QURANIC RECITATION FOR SISTERS 12:30PM - 1:30PM</div>
                    <div class="grid-item">QURANIC RECITATION 10:30AM - 11:30AM</div>
                    <div class="grid-item">PROPHETS IN QURAN 12PM - 1PM</div>
                    <div class="grid-item">ARABIC FOR BEGINNERS 2PM - 3PM</div>
                </div>
            </div>
        </section>
        
    )
}