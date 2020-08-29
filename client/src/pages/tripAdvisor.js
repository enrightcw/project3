import React from 'react'
import tripAdvisor from '../../../routes/api/tripAdvisor'
const tripAdvisorData = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    let [ticker, setTicker] = React.useState('')
    let [message, setMessage] = React.useState('')
    // fetches stock data based on parameters
    const fetchData = (e) => {
        e.preventDefault()
        setMessage('Loading...')
        // api.stockTimeSeries(ticker)
        // .then((response)=>{
        //    setResponseData(response.data)
        //    setMessage('')
        //    console.log(response)
        // })
        // .catch((error) => {
        //    setMessage('Error')
        //    console.log(error)
        // })
    }
    return (
        <div>
            
        </div>
    )
}
export default tripAdvisorData