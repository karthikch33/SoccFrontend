import React, { useEffect } from 'react'
import CustomtInput from '../CustomtInput'
import * as yup from 'yup'
import {useFormik} from 'formik'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { sessionRegister } from '../features/session/sessionSlice'
import CustomAlert from '../CustomAlert'

const AdminSessionAddition = () => {

    const dispatch = useDispatch()

    let schema = yup.object().shape({
        sessiontitle:yup.string().required('Session Title Is Required'),
        date:yup.string().required('Date is Required'),
        venue: yup.string().required('Venue is Required'),
        startAt:yup.string().required('Session Start Time is Required'),
        ends:yup.string().required('Session Ends Time Is Required')
    })

    const {AlreadyRegistered} = useSelector(state=>state.admin)

    useEffect(()=>{
        if(AlreadyRegistered?.sessiontitle!==undefined)
        {
            toast.success('Session Registered Successfully')
        }
        else if(AlreadyRegistered?.message !== undefined)
        {
            toast.error('Session Registration Failed')
        }
    },[AlreadyRegistered])

    const formik = useFormik({
        initialValues:{
            sessiontitle:"",
            date:'',
            venue:'',
            startAt:'',
            ends:''
        },
        validationSchema:schema,
        onSubmit:(values)=>{    
            dispatch(sessionRegister(values))
            formik.resetForm()
        }
    })

    

  return (
    <div className='container-xxl'>
        <div className="row">
            <div className="col-12">
                <form action=""  className='my-4 submit-form' onSubmit={formik.handleSubmit}>
                    <CustomAlert/>
                <h4 className='fs-2'>Session Addition Page</h4>
                <CustomtInput type="text" placeholder="Enter Session Title" name='sessiontitle' onChange={formik.handleChange('sessiontitle')} value={formik.values.sessiontitle}/>
                <div className="error">
                    {
                        formik.touched.sessiontitle && formik.errors.sessiontitle
                    }
                </div>
                <CustomtInput type="text" placeholder="Enter Session Date" name='date' onChange={formik.handleChange('date')} value={formik.values.date}/>
                <div className="error">
                    {
                        formik.touched.date && formik.errors.date
                    }
                </div>
                <label htmlFor="" style={{color:"red"}}>*Date must be in format of YYYY-MM-DD</label>
                <CustomtInput type="text" placeholder="Enter Session Venue" name='venue' onChange={formik.handleChange('venue')} value={formik.values.venue}/>
                <div className="error">
                    {
                        formik.touched.venue && formik.errors.venue
                    }
                </div>
                <CustomtInput type="text" placeholder="Enter Session StartsAt" name='startsAt' onChange={formik.handleChange('startAt')} value={formik.values.startAt}/>
                <div className="error">
                    {
                        formik.touched.startAt && formik.errors.startAt
                    }
                </div>
                <CustomtInput type="text" placeholder="Enter Session EndsAt" name='ends' onChange={formik.handleChange('ends')} value={formik.values.ends}/>
                <div className="error">
                    {
                        formik.touched.ends && formik.errors.ends
                    }
                </div>
                <button className='btn btn-warning text-dark' type='submit'>Add Session</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminSessionAddition