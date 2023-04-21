import React from 'react'
import '../../pages/style.css';
import { Container, Row } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import gfg from '../../Assets/gfg.jpg'
import medium from '../../Assets/medium-2.jpg'

function BlogPage() {
    return (
        <div className='blogpage'>
            <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <div className='blogCard'>
                        <img className='blogImg' src={gfg}></img>
                        <h2>Difference Between poll() and remove() method of Queue Interface in Java</h2>
                        <button className="blogBtn" href="https://www.geeksforgeeks.org/difference-between-poll-and-remove-method-of-queue-interface-in-java/" target="_blank">
                            Read
                        </button>
                    </div>
              
                    <div className='blogCard'>
                        <img className='blogImg' src={medium}></img>
                        <h2>Basic concepts and tasks to get started with Linux</h2>
                        <button className="blogBtn" href="https://medium.com/@shubh4amg/basic-concepts-and-tasks-to-get-started-with-linux-b6ef0b713616" target="_blank">
                            Read
                        </button>
                    </div>
                
                    <div className='blogCard'>
                        <img className='blogImg' src={medium}></img>
                        <h2>Step-by-step Guide on How To Start an Open Source Contribution</h2>
                        <button className="blogBtn" href="https://medium.com/@shubh4amg/step-by-step-guide-on-how-to-start-an-open-source-contribution-db7f1a47f917" target="_blank">
                            Read
                        </button>
                    </div>
                </Row>
               
            </Container>
        </div>
    )
}

export default BlogPage