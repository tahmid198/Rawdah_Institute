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
                                <div className="grid-item">
                                    <h4>SUNNAH PRAYERS - <i>SUNNAH 101</i></h4>
                                    <p>This course is devloped for students who wish to develop an in depth understanding 
                                        of sunnah prayers. The course will cover the rulings, descriptions, times, and benefits of 
                                        the various sunnah prayers as derived from the tradition of our beloved Prophet Muhammad SAW.</p>
                                </div>
                                <div class="grid-item">
                                    <h4>QURANIC RECITATION - <i>QURAN 102</i></h4>
                                    <p> This course is designed for students that are aiming to recite the Quran fluently. 
                                        It is a beginner friendly course that will review the foundations of the Quran and present rules of tajwid and proper pronunciation.
                                        Students will refine their recitation of selected surahs and passages from the Quran.
                                    </p>   
                                </div> 
                                <div class="grid-item">
                                    <h4>TAFSIR OF SHORT SURAHS - <i>TAFSIR 101</i></h4>
                                    <p> This course is designed for students who wish to develop an understanding of the most frequently recited surahs of the Quran.
                                        The course will present the meaninf and commentary of Surah al-Fatiha and the last ten surahs of the Quran. Students will be able to better
                                        appreciate these Surahs and enhance their level of cocentration during recitation and prayer.
                                    </p>   
                                </div> 
                                <div class="grid-item">
                                    <h4>QURANIC RECITATION FOR SISTERS - <i>QURAN 101</i></h4>
                                    <p> This is a new course exclusively for sisters. It is designed for students that are aiming to recite the Quran fluently.
                                        It is a beginner friendly course that will review the foundations of the Quran and present basic rules of tajwid and proper pronuncaition. 
                                        Students will refine thier recitation of selected short surahs and passages from the Quran.
                                    </p>
                                </div> 
                                <div class="grid-item">
                                    <h4>PROPHETS IN THE QURAN - <i>ARABIC 101</i></h4>
                                    <p> This course is desifned for students who wish to benefit from prophetic examples highlighted in the Quran.
                                        The course will focus on the lives of prophets Ibrahim, Yusuf, Musa, Isa, and Muhammad peace be upon them all.
                                        Practical lessons for contemporary young Muslims will be presented.
                                    </p>   
                                </div>    
                                <div class="grid-item">
                                    <h4>ARABIC FOR BEGINNERS - <i>ARABIC 102</i></h4>
                                    <p> This course is designed for students who wish to acquire a foundation in Arabic literacy. Base on their respective levels,
                                        students will develop skills in all four modalities: reading, writing, speaking, and listening. 
                                        This is a beginner's level course that will help pave the way to further Arabic study.
                                    </p>   
                                </div>
                            </div>
                     </div>
            </div>
            <div class="footer">
                <h1> © 2023 RAWDAH INSTITUTE</h1>
            </div>
        </section>
        
    )
}