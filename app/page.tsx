'use client'
import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web'
export default function Home() {
  const props = useSpring({
    enter: { fontSize: '1rem' },
    to: { fontSize: '5rem' },
  })
  return (
    <main>
      <h1 className="sr-only">Jose Rivas</h1>
      <div id={'home'} className={'bg-white h-[calc(100vh)] flex items-center justify-center'}>
        <animated.div style={props}>
          <h2 className={'p-4 text-jr-blue font-bold text-center'}>Improving lives<br /><span className={'text-jr-dark'}>through</span> Technology</h2>
        </animated.div>
      </div>
      <div id={'experience'} className={'bg-jr-yellow h-[calc(100vh)] flex items-center justify-center'}>
        <animated.div style={props}>
          <h2 className={'p-4 text-jr-dark font-bold text-center'}>My Experience</h2>
        </animated.div>
      </div>
      <div id={'work'} className={'bg-jr-lightgray h-[calc(100vh)] flex items-center justify-center'}>
        <animated.div style={props}>
          <h2 className={'p-4 text-jr-dark font-bold text-center'}>My Work</h2>
        </animated.div>
      </div>
      <div id={'contact'} className={'bg-jr-dark h-[calc(100vh)] flex items-center justify-center'}>
        <animated.div style={props}>
          <h2 className={'p-4 text-white font-bold text-center'}>Contact me</h2>
        </animated.div>
      </div>
    </main>
  )
}
