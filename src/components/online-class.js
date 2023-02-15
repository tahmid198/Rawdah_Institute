import React from 'react';
import ClampLines from 'react-clamp-lines';

// import {Helmet, HelmetProvider} from "react-helmet-async";
import  './css/online-class.css';

const sunnah101 =  "Overview \nThis course is devloped for students who wish to develop an in depth understanding of sunnah prayers. The course will cover the rulings, descriptions, times, and benefits of the various sunnah prayers as derived from the tradition of our beloved Prophet Muhammad SAW.";

const sunnah101Info = "Details \nCourse Code: Sunnah 101 \nInstructor: Sh. Hassan Akbar \nTime: Saturday 10 AM - 11 AM EST \nDates: July 3rd - Sept. 4th (10 Weeks) \nFormat: Online via Zoom \nTution $175"

const  quran102 = "Overview \nThis course is designed for students that are aiming to recite the Quran fluently. It is a beginner friendly course that will review the foundations of the Quran and present rules of tajwid and proper pronunciation. Students will refine their recitation of selected surahs and passages from the Quran.";

const quran102Info = "Details \nCourse Code: Quran 102 \nInstructor: Sh. Mohammed Haque  \nTime: Sunday 10:30 AM - 11:30 AM EST \nDates: July 5th - Sept. 5th (10 Weeks) \nFormat: Online via Zoom \nTution $175"

const tafsir101 = "Overview \nThis course is designed for students who wish to develop an understanding of the most frequently recited surahs of the Quran. The course will present the meaning and commentary of Surah al-Fatiha and the last ten surahs of the Quran. Students will be able to better appreciate these Surahs and enhance their level of cocentration during recitation and prayer.";

const tafsir101Info = "Details \nCourse Code: Tafsir 101 \nInstructor: Sh. Osamah Salhia  \nTime: Saturday 11:15 AM - 12:15 PM EST \nDates: July 3rd - Sept. 4th (10 Weeks) \nFormat: Online via Zoom \nTution $175"

const quran101 = "Overview \nThis is a new course exclusively for sisters. It is designed for students that are aiming to recite the Quran fluently. It is a beginner friendly course that will review the foundations of the Quran and present basic rules of tajwid and proper pronuncaition. Students will refine thier recitation of selected short surahs and passages from the Quran.";

const quran101Info = "Details \nCourse Code: Quran 101 \nInstructor: Ust. Iman Mahmoud  \nTime: Saturday 12:30 PM - 1:30 PM EST \nDates: July 3rd - Sept. 4th (10 Weeks) \nFormat: Online via Zoom \nTution $175"

const arabic101 = "Overview \nThis course is desifned for students who wish to benefit from prophetic examples highlighted in the Quran. The course will focus on the lives of prophets Ibrahim, Yusuf, Musa, Isa, and Muhammad peace be upon them all. Practical lessons for contemporary young Muslims will be presented.";

const arabic101Info = "Details \nCourse Code: Tafsir 101 \nInstructor: Sh. Zakir Ahmed  \nTime: Sunday 12 PM - 1 PM EST \nDates: July 4th - Sept. 5th (10 Weeks) \nFormat: Online via Zoom \nTution $175"

const arabic102 = "Overview \nThis course is designed for students who wish to acquire a foundation in Arabic literacy. Base on their respective levels, students will develop skills in all four modalities: reading, writing, speaking, and listening. This is a beginner's level course that will help pave the way to further Arabic study.";

const arabic102Info = "Details \nCourse Code: Arabic 102 \nInstructor: Ust. Sherif Fadl \nTime: Sunday 2 PM - 3 PM EST \nDates: July 4th - Sept. 5th (10 Weeks) \nFormat: Online via Zoom \nTution $175"

export default function OnlineClass(){

    return (
        // <HelmetProvider>
        <section className="sec-container">
            <div className="title">
                <div className="title-info">
                    <h1>Online Classes</h1>
                        <p>Summer 2023</p>
                </div>
            </div>
            <div className="schedule">
                <div className="schedule-title">
                    <h1>SUMMER 2023 SCHEDULE</h1>
            </div>
                <div class="grid-schedule-container">
                    <div className="grid-item">FRIDAY</div>
                    <div className="grid-item">SATURDAY</div>
                    <div className="grid-item">SUNDAY</div>
                    <div className="grid-item">SUNNAH PRAYERS 10AM - 11AM</div>
                    <div className="grid-item">TAFSIR OF SHORT SURAHS 11:15AM - 12:15PM</div>
                    <div className="grid-item">QURANIC RECITATION FOR SISTERS 12:30PM - 1:30PM</div>
                    <div className="grid-item">QURANIC RECITATION 10:30AM - 11:30AM</div>
                    <div className="grid-item">PROPHETS IN QURAN 12PM - 1PM</div>
                    <div className="grid-item">ARABIC FOR BEGINNERS 2PM - 3PM</div>
                </div>
            </div>

            <div className='class-container'>
                <div className='class-list'>
                    <h1>VIRTUAL CLASSES</h1>
                        <div className="grid-class-container">
                            <div className="grid-item" >
                                <h4>SUNNAH PRAYERS - <i>SUNNAH 101</i></h4>
                                <p className='overview'>{sunnah101}</p>
                                <ClampLines className ="details" text={sunnah101Info} lines={1} moreText = 'READ MORE' lessText='READ LESS' />
                            </div>

                            <div className="grid-item">
                                <h4>TAFSIR OF SHORT SURAHS - <i>TAFSIR 101</i></h4>
                                <p className='overview'>{tafsir101}</p>
                                <ClampLines className ="details" text={tafsir101Info} lines={1} moreText = 'READ MORE' lessText='READ LESS'/>
                            </div> 

                            <div className="grid-item">
                                <h4>PROPHETS IN THE QURAN - <i>ARABIC 101</i></h4>
                                <p className='overview'>{arabic101}</p>
                                <ClampLines className ="details" text={arabic101Info} lines={1} moreText = 'READ MORE' lessText='READ LESS'/>
                            </div>   

                            <div className="grid-item">
                                <h4>ARABIC FOR BEGINNERS - <i>ARABIC 102</i></h4>
                                <p className='overview'>{arabic102}</p>
                                <ClampLines className ="details" text={arabic102Info} lines={1} moreText = 'READ MORE' lessText='READ LESS'/>
                            </div>

                            <div className="grid-item">
                                <h4>QURANIC RECITATION FOR SISTERS - <i>QURAN 101</i></h4>
                                <p className='overview'>{quran101}</p>
                                <ClampLines className ="details" text={quran101Info} lines={1} moreText = 'READ MORE' lessText='READ LESS'/>
                            </div>
                            
                            <div className="grid-item">
                                <h4>QURANIC RECITATION - <i>QURAN 102</i></h4>
                                <p className='overview'>{quran102}</p>
                                <ClampLines className ="details" text={quran102Info} id="default" lines={1} moreText = 'READ MORE' lessText='READ LESS'/>
                            </div> 
                        </div>
                </div>
            </div>
        </section>
        // </HelmetProvider>   
    )
}