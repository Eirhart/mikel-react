import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import useWindowResize from './useWindowResize'

const Content = ({ show, setShow, showTwo, setShowTwo }) => {
    const { width, height } = useWindowResize()

    useEffect(() => {
        setShow(width > 780 ? true : false)
        setShowTwo(width > 780 ? true : false)
    }, [width])
  return (
    <div className='content'>
        <div className='contentOne'>
            <h1>Company's Details and Information</h1>
            <p className='contentp'>These are the videos that explain what is ATOMY all about.</p>
            {width < 780 ? (<button className="caretButton" onClick={() => setShow(!show)}>{show ? <FontAwesomeIcon icon={faAngleUp} className="caret" /> : <FontAwesomeIcon icon={faAngleDown} className="caret" />}</button>) : null}

            <motion.div
            className='videos'
            initial={{height: 0}}
            animate={{height: show ? 'fit-content' : 0}}
            transition={{duration: 0.5}}
            >
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=g6nHdBQM8XY&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Company Introduction</h3>
                    <p>Gives you details about Atomy</p>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=R9MmJQfSZYM&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Why Choose Atomy</h3>
                    <p>Reason why choosing Atomy business</p>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=DT22tXRCUng&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Why choose Atomy?</h3>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=dSTwt2mKFZE&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Why join Atomy?</h3>
                    <p>The difference of Atomy to other companies</p>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=ocRieRjl7Es&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Compensation Plan</h3>
                    <p>How you can get residual income</p>
                </div>
            </motion.div>
            {show && width < 768 ? (<button className="caretButton" onClick={() => setShow(false)}><FontAwesomeIcon icon={faAngleUp} className="caret" /></button>) : null}
        </div>
        <div className='contentTwo'>
            <h1>Company's Product Introductions and Demonstrations</h1>
            <p className='contentp'>These are some videos that show how high quality and effective are ATOMY products</p>
            {width < 768 ? (<button className="caretButton" onClick={() => setShowTwo(!showTwo)}>{showTwo ? <FontAwesomeIcon icon={faAngleUp} className="caret" /> : <FontAwesomeIcon icon={faAngleDown} className="caret" />}</button>) : null}
            <motion.div
            className='videos'
            initial={{height: 0}}
            animate={{height: showTwo ? 'fit-content' : 0}}
            transition={{duration: 0.5}}
            >
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=Ym4_dkgMKq0&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Well-known brand in Korea. The Atomy's 6 best selling products HAUL</h3>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=YJ3GzeRpu9A&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Atomy Synergy Ampoule and Evening Care Set Tutorial</h3>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=Cybd9orNW2I&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Product Introduction (Hemohim, Alaska E-Omega3, Probiotics) by DM Norielee Magsingit, RN</h3>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=834Ak2HUxtQ&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Eat for Eyes</h3>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=WKmiHDi5tZI&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Product Introduction (Hemohim, Alaska E-Omega3, Lutein) by Dr. Eleuterio Bernardo</h3>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=tC9us4Egxa0&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Why do men need convenient cosmetics</h3>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=PTKA3WlyKTY&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Atomic Fabric Detergent Demonstration</h3>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=wQ1WrI4ldjs&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Atomy Dish Detergent</h3>
                    <p>Atomy dish detergent is so safe you can eat it. Yes the dish detergent doubles as a fruit and vegetable wash</p>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=W1LuB_rzNUQ&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Atomy Liquid Detergent</h3>
                    <p>The Atomy laundry detergent is highly concentrated. This means you do not need to fill the entire cap!</p>
                </div>
                <div className='desc'>
                <ReactPlayer
                url="https://www.youtube.com/watch?v=16YP-3loMig&feature=youtu.be"
                light={true}
                className="video"
                width={width > 768 ? 300 : 360}
                />
                    <h3>Atomy Vitamin C</h3>
                    <p>Helps prevent diseases</p>
                </div>
            </motion.div>
            {showTwo && width < 768 ? (<button onClick={() => setShowTwo(false)} className="caretButton"><FontAwesomeIcon icon={faAngleUp} className="caret" /></button>) : null}
        </div>
    </div>
  )
}

export default Content