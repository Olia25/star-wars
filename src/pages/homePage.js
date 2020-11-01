import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import {Row, message} from 'antd';
import {Link} from "react-router-dom";
import {getIdFromUrl} from "../utils";
import {API_URL} from "../constants";

const HomePage = () => {

    const [data, setData] = useState([])

    const feathDataPlanets = async () =>{
        try {
            const response = await axios.get(`${API_URL}/planets/`)
            setData(response.data.results)
            // console.log("response.data", response.data.results)
        } catch (e) {
            message.error(`Something went wrong: ${e.message}`, 5)
        }
    }
    useEffect(() => {
        feathDataPlanets()
    },[])
    return (
        <Fragment>
            <Row justify="space-around">
                {data && (
                    data.map(({name, climate, population, url})=>
                        <Link key={url} to={`planets/${getIdFromUrl(url)}`}>
                            <div className="borderOfTitle">
                                <h2 className="colorOfTitle">{name}</h2>
                                <h3>Climate: {climate}</h3>
                                <h3>Population: {population}</h3>
                            </div>
                        </Link>
                    )
                )}
            </Row>
        </Fragment>
    )
}

export default HomePage;