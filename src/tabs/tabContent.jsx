import React, { useState, useEffect } from "react"
import { dataSet } from "./contentArray";
import Card from 'react-bootstrap/Card';
const BOX_SHADOW = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"


export default function TabContent({ content_key }) {

    const [content, setContent] = useState(null);

    useEffect(() => {
        if (content_key === "ALL") {
            const arr = Object.keys(dataSet).flatMap((items) => {
                return dataSet[items]
            })
            setContent(arr);
        } else {
            const arr = dataSet[content_key]
            setContent(arr);
        }
    }, [content_key])



    return (
        <div className="container-fluid p-3" style={{height:"85vh", overflow:"auto", backgroundColor: "#f6f6f6" }} >
            <div className="row w-100">
                {
                    content && content.length > 0 && content.map((items, index) => {
                        return <div key={index} className="col-md-4 col-sm-12 mb-4">
                            <Card className="p-1" style={{cursor:"pointer", boxShadow: BOX_SHADOW}} >
                                <Card.Img style={{height:"250px"}} variant="top" src={items.image} />
                                <Card.Body>
                                    <Card.Title title={items.title} style={{width:"100%"}} className="text-truncate" >{items.title}</Card.Title>
                                    <Card.Text className="mt-4">
                                        <div><span style={{color:"#868484", fontWeight:500}} >by</span> <span style={{fontWeight:600}}>{items.author}</span></div>
                                    </Card.Text>
                                    <Card.Footer className="d-flex align-items-center justify-content-between w-100">
                                        <div>{items.date}</div>
                                        <div>{items.duration}</div>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </div>
                    })
                }
            </div>
        </div>
    )
}