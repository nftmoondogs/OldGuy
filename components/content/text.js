import styles from '@/styles/page.module.css'
import Image from 'next/image'
import pic2 from "../../assests/images/pic2.png"
import pic3 from "../../assests/images/pic3.gif"
import {VscTwitter} from 'react-icons/vsc'
import {AiFillGithub} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa';

export const ExploreAI = () => {
    return (      
  
        
        <div>
            <img src="https://i.ibb.co/wgXQCtN/pump.gif" width="300" height="100" alt="Description of the image"/>
            <p>$OldGuy Token is launched via pump.fun Meta as it's currently the best way to ensure equal distribution</p>
            <a href='https://pump.fun/board'><FiExternalLink style={{marginTop:"10px"}} size={25}/></a>
        </div>
    
    )

}

export const Uiaftersex = () => {
    return (        
        <div>
            <img src="https://i.ibb.co/cwnwx0c/5c5b90a0-1292-428b-8863-cf90c52d91c6.gif" width="370" height="300" alt="Description of the image"/>
            <p>Hop on $OldGuy's Telegram, where we're flipping web2 style coins truly old-school and calling dibs on the last Cadillac CTS in the lot.</p>
            <a href='https://pump.fun/3yAYvcJMgRByBNGbXvuxuUMvYjQxeLZX4u8sBm4Dpump'><FiExternalLink style={{marginTop:"10px"}} size={25}/></a>
            <a href='https://t.me/oldguysocial'><FaTelegramPlane style={{marginLeft: "10px", marginRight: "7px"}} size={30}/></a>
        </div>
    )
}

export const Socials = () => {
    return (        
        <div style={{margin:"auto",textAlign:"center"}}> 
            <p>
            <a href='https://twitter.com/oldguysol'><VscTwitter style={{marginLeft: "5px"}}  size={40}/></a> 
            <a href='https://t.me/oldguysocial'><FaTelegramPlane style={{marginLeft: "10px", marginRight: "7px"}} size={40}/></a>
            </p>
        </div>
    )
}

export const Notes = () => {
    return (        
        <div> 
            <img src="https://i.ibb.co/CswWHGD/5.gif" width="270" height="270" alt="Description of the image"/>
            <div className={styles.notesHeader}>$OldGuy Token</div>
            <p>Back in my day, you had to actually work to make money! Not like you little rascals now, just trading silly meme coins and sketchy shit coins all day, crossing your fingers the number goes up! 😤💼📈</p>
        </div>
    )
}


export const safariTabTexts = [
{
    name: "Pump.Fun",
    text:  <ExploreAI />,
    x:-350,
    y:-200,
    drag: true
},
{
    name: "Old School Web2 Kinda Community",
    text:  <Uiaftersex />,
    x:300,
    y:-100,
    drag: true
    },   
 ]
 
 export const notesTabTexts = [
{
    name:"Old.txt",
    text:<Notes/>,
    x:120,
    link:"",
    y:270,
    drag: false,
    deg:"5",
    },
{
    name:"social.zip",
    text: <Socials/>,
    link:"",
    x:400,
    y:0,
    drag: false,
    deg:"-5",
    },
{
    name:"notes.txt",
    text:"I don't know why you Kids like shitcoins, Go get a 'Real JOB' at McDonald",
    x:-450,
    link:"https://pump.fun/board",
    y:400,
    drag: false,
    deg:"-5",
    },
]

  export const picTabTexts = [
{
    pic: pic3,
    link: "https://pump.fun/board",
    width:150,
    height:150,
    x:-100,
    y:-500,
    drag: true,
    },
  ]
 