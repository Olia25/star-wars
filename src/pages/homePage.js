import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios';
import {Row} from 'antd'

const HomePage = () => {

    const [data, setData] = useState([])

    const feathDataPlanets = async () =>{
        try {
            const response = await axios.get('https://swapi.dev/api/planets/')
            setData(response.data.results)
            console.log("response.data", response.data.results)
        } catch (e) {
            console.log("error:", e.message)
        }
    }
    useEffect(()=>{
        feathDataPlanets()
    },[])
    return (
        <Fragment>
            <Row justify="space-around">
                {data && (
                    data.map(({name, climate, population})=>
                        <div className="borderOfTitle">
                            <h2>{name}</h2>
                            <h3>Climate: {climate}</h3>
                            <h3>Population: {population}</h3>
                        </div>
                    )
                )}
            </Row>

        </Fragment>

    )
}

export default HomePage;