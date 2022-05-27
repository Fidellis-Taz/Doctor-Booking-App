import React from 'react'
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const AllClinics = () => {
    const contentStyle = {
        height: "auto",
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',

        /* background: '#364d79', */
    };
    return (
        <>
            <div className="allClinics">


                <h2>Top Cliniccs</h2>

                <Carousel autoplay slidesToShow={4} arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} className="clinics__carousel">
                    <div className='eachClinic' style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column eachClinicContent" data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>
                    <div style={contentStyle}>
                        <a href="/clinic/id" className="text-decoration-none" style={{ outline: 'none' }}>
                            <div className="d-flex flex-column " data-clinic="<%= clinic.id %>">
                                <img src="/images/background/for-doctors.jpg" alt="image bla bla" />
                                <h5>Emakhandeni Hospital</h5>
                            </div>
                        </a>
                    </div>

                </Carousel>,



                <br />
            </div>
        </>

    )
}

export default AllClinics

