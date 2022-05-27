import React, { useEffect, useState } from 'react'
import { getAppointmentsByDoctorApi, editAttendedAppointmentApi, confirmDoctorAppointment, deleteAppointmentApi } from '../../api/appointment'
import MainDashboardLayout from "../MainDashboard/LayoutCompo"
import { showErrorMsg } from "../../helpers/message";
import { useSelector } from 'react-redux';
import { Tabs, Radio, Button } from 'antd';

import { TagOutlined, SubnodeOutlined, NodeIndexOutlined, MedicineBoxOutlined } from "@ant-design/icons"
import moment from 'moment';
//import DoctorAppointments from './components/DoctorAppointments';
//import "./User.css"


const { TabPane } = Tabs;
const Appointments = () => {
    const { authDoctor } = useSelector((state) => ({ ...state }));

    const [appointments, setAppointments] = useState()
    const [errorMsg, setErrorMsg] = useState("")

    //get all appointments
    useEffect(() => {

        getAppointments()
    }, [])

    const getAppointments = async () => {
        await getAppointmentsByDoctorApi(authDoctor.doctor._id)
            .then((responce) => {
                setAppointments(responce.data.appointments)

            }).catch((error) => {
                console.log(error);
            })

    }
    const handleAttended = async (id) => {
        await editAttendedAppointmentApi(id)
    }
    const [size, setSize] = useState("small")

    const handleConfirmAppointment = async (id) => {
        await confirmDoctorAppointment(id)
        getAppointments()
    }
    const onChange = e => {

        setSize(e.target.value)
    }


    const handleCancelAppointment = async (id) => {

        deleteAppointmentApi(id).then((res) => {
            //activate this function after days later
            getAppointments()
        }).catch((err) => {
            console.log(err);
        })



    }


    return (
        <div>


            <MainDashboardLayout>

                <div>

                    <Tabs defaultActiveKey="1" type="card" size={size}>
                        <TabPane tab="Need Comfirmation" key="1">

                            {
                                appointments && appointments.map((appoint) => {
                                    return (

                                        <div className='prev__appointments'>
                                            <div className="prev__appointment">


                                                <div className="prev__appointment__card prev__appointment__one">
                                                    <div className='prev__date'  >
                                                        {`${moment().format('MMMM Do YYYY')}  ${appoint.appointmentTime}`}
                                                    </div>
                                                    <div className="prev__icon__content prev__tag__two">
                                                        <TagOutlined />
                                                        <p>{appoint.appointmentStatus}</p>
                                                    </div>
                                                    <div className="prev__icon__content prev__tag__two">
                                                        <TagOutlined />
                                                        <p>Examination</p>
                                                    </div>
                                                </div>
                                                <div className="prev__appointment__card prev__appointment__two">
                                                    <div className="prev__icon__content prev__two__hospital">
                                                        <SubnodeOutlined />
                                                        <p>{appoint?.hospital.hospitalName}</p>
                                                    </div>
                                                    <div className="prev__icon__content prev__two__hospital">
                                                        <NodeIndexOutlined />
                                                        <p>{appoint.nameOfPoliclinic} </p>
                                                    </div>
                                                </div>
                                                <div className="prev__appointment__card prev__appointment__three">
                                                    <div className="prev__icon__content prev__three__hospital">
                                                        <MedicineBoxOutlined />
                                                        <p>{appoint.nameOfPoliclinic} {appoint.doctor.name}</p>
                                                    </div>
                                                    <div className="prev__icon__content prev__three__hospital">
                                                        <NodeIndexOutlined />
                                                        <p> {appoint.doctor.name} </p>
                                                    </div>
                                                </div>

                                                <div className="delete__icon">
                                                    <Button type="primary" onClick={() => handleCancelAppointment(appoint._id)} >Cancel</Button>
                                                    <Button type="primary" onClick={() => handleConfirmAppointment(appoint._id)} >Confirm</Button>

                                                </div>

                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tab="Comfirmed" key="2">
                            {/*  {
                                appointments && appointments.map((appoint) => {
                                    return appoint.appointmentStatus = "Confirmed" ?

                                        <DoctorAppointments appoint={appoint} confirmDoctorAppointment={confirmDoctorAppointment} />
                                        : <div>No appointments</div>
                                })
                            } */}

                        </TabPane>
                        <TabPane tab="Attended" key="3">
                            <p>Attended</p>

                        </TabPane>
                        <TabPane tab="Cancelled" key="4">
                            <p>cancelled</p>

                        </TabPane>
                    </Tabs>
                </div>



                {/*  <Schedule /> */}

            </MainDashboardLayout>
        </div>
    )
}

export default Appointments