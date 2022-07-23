import React from 'react'
import { useState } from 'react'
export const The = () => {
    const [link, setLink] = useState([])
    const [data, setData] = useState()
    const [giao, setGiao] = useState()
    const [iscomplete, setIsComlete] = useState(false)
    const [islink1, setIslink1] = useState(false)
    const [islink2, setIslink2] = useState(false)
    const [islink3, setIslink3] = useState(false)
    const [shortlink,setShortlink] = useState()


    const handlebuton =() => {
        setIslink1(true)
        setIslink2(false)
        setIslink3(false)
    }
    const handlebuton1 =() => {
        setIslink1(false)
        setIslink2(true)
        setIslink3(false)
    }
    const handlebuton2 =() => {
        setIslink1(false)
        setIslink2(false)
        setIslink3(true)
    }

    const changvalue = (event)=>{
        setData(event.target.value)
        console.log(event.target.value)
    }
	const handleFetchlink = () => {
        setGiao('https://api.shrtco.de/v2/shorten?url='+data)
		fetch('https://api.shrtco.de/v2/shorten?url='+data)
			.then((response) => {
				return response.json()
			}).then((data) => {
				console.log(data)
				setLink(data.result)
                if (data.ok == true) {
                    setIsComlete(!iscomplete)
                }
                if (islink1== true) {
                    setShortlink(data.result.short_link)
                }
                if (islink2== true) {
                    setShortlink(data.result.short_link2)
                }
                if (islink3== true) {
                    setShortlink(data.result.short_link3)
                }
			})
	}	
    
  return (
    <div className='container'>
        <h1> The privacy- frienidly url shortener</h1>
        <div className='containerlink'>
            <div className='dong1'>
            <h2> Link Shorter</h2>
            <label>Enter a Link</label>
            <input type="text" onChange={changvalue} />
            <button onClick={handleFetchlink}>summit</button>
            </div>
            <div className='dong2'>
                <p> Short demain </p>
                <button 
                onClick={handlebuton}
                style={{backgroundColor: islink1 ?  "rgb(151, 151, 248)" : "aliceblue"}}
                >shrtco.de</button>
                <button
                style={{backgroundColor: islink2 ?  "rgb(151, 151, 248)" : "aliceblue"}}
                onClick={handlebuton1}
                >9qrde</button>
                <button onClick={handlebuton2}
                style={{backgroundColor: islink3 ? "rgb(151, 151, 248)" : "aliceblue"}}
                >shiny.link</button>
            </div>
            {iscomplete && <div className='containerresuitl'>
                <div className='containerfooter'>
                <p> By using shrtcode you agree to our Terms of Service</p>
               <div className='resuilt'>
                <h5> Link generate</h5>
                <h4>{shortlink}</h4> 
                </div>
               </div>
            </div>}
        </div>
    </div>
  )
}
