import React, {useState,  useEffect, Fragment} from 'react';
import axios from 'axios';
import {message, Row, Col, Collapse} from "antd";
import {API_URL} from "../constants";
import { useParams } from 'react-router-dom'

const { Panel } = Collapse;

const Planet = () => {
    const [data, setData] = useState(null)
    const { planetsId } = useParams();

    const fetchDataPlanets = async id => {
        try {
            const response = await axios.get(`${API_URL}/planets/${id}/`)
            setData(response.data)
            // console.log("response.data", response.data)
        } catch (e) {
            message.error(`Something went wrong: ${e.message}`, 5)
        }
    }

    useEffect(() => {
        fetchDataPlanets(planetsId)
    }, [planetsId])


    return(
        <Fragment>
            {data && (
                <Row justify="center">
                    <Col span={18} className="coverForDate">
                        <h1 className="colorOfTitle"> Name: {data.name}</h1>
                        <h3> Rotation period: {data.rotation_period}</h3>
                        <h3> Diameter: {data.diameter}</h3>
                        <h3> Climate: {data.climate}</h3>
                        <h3> Gravity: {data.gravity}</h3>
                        <h3> Terrain: {data.terrain}</h3>
                        <h3> Population: {data.population}</h3>
                        <Collapse defaultActiveKey={['1']} >
                            <Panel showArrow={false} header="Residents" key="1">
                                {data.residents.length > 0 ? (
                                    data.residents.map(url => <a key={url} href={url}> <p>{url}</p> </a>)
                                ) :
                                    <p>not found</p>
                                }
                            </Panel>
                        </Collapse>
                    </Col>
                </Row>
            )}
        </Fragment>
    )

}

export default Planet;