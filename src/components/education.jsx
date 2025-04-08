
import { useState, useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);
    return ( <>
    <div className='h-screen flex items-center flex-col justify-center bg-[#324031]' ref={timelineRef}>
        <VerticalTimeline animate={isVisible} >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fefae0',color:'black' }}
    date={<span className="text-white">2024-2028</span>}
    iconStyle={{ background: '#fefae0',display:'flex',justifyContent:'center',alignItems:'center' }}
    icon={<img src='mortarboard.png' className='h-[70%]'/>}>
    <h1 className="vertical-timeline-element-title text-3xl font-bold">B.Tech in CS & AI</h1>
    <h4 className="vertical-timeline-element-subtitle text-xl">Newton School of Technology,
    Rishihood University</h4>
  </VerticalTimelineElement>
  <div className='py-1'></div>
  <div className='py-1'></div>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<span className="text-white">2021-2023</span>}
    contentStyle={{ background: '#fefae0',color:'black' }}
    iconStyle={{ background: '#fefae0', color: 'black',display:'flex',justifyContent:'center',alignItems:'center' }}
    icon={<img src='mortarboard.png' className='h-[70%]'/>}
    >
    <h1 className="vertical-timeline-element-title text-3xl font-bold">Higher Secondary Education</h1>
    <h4 className="vertical-timeline-element-subtitle text-xl">Divine Public Education</h4>
  </VerticalTimelineElement>
  <div className='py-1'></div>
  <div className='py-1'></div>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<span className="text-white">2008-2021</span>}
    contentStyle={{ background: '#fefae0',color:'black' }}
    iconStyle={{ background: '#fefae0', color: '#fff',display:'flex',justifyContent:'center',alignItems:'center' }}
    icon={<img src='mortarboard.png' className='h-[70%]'/>}
    >
    <h1 className="vertical-timeline-element-title text-3xl font-bold">Secondary Education</h1>
    <h4 className="vertical-timeline-element-subtitle text-xl">Siddhartha English Boarding
    Secondary School</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
    </>)
}

export default Education


