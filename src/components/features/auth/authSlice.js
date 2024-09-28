import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import authSerivces from "./authService";
import { toast } from "react-toastify";
import { sendEmail } from "../../Email";


const intialState = {
    isError:false,
    isSuccess:false,
    isLoading:false,
    AlreadyRegisterd:'',
    ContactSuccess:'',
    EmailToast:"",
    RegisterToast:"",
    message:""
}

export const resetState = createAction("Reset_all")

export const registrationSlice = createAsyncThunk('auth/register', async (registerData, thunkAPI) => {
    try {
        return await authSerivces.registrationService(registerData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); 
    }
}); 

export const contact = createAsyncThunk('auth/contact',async (contactData,thunkAPI)=>{
    try {
        return await authSerivces.contactService(contactData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const feedback = createAsyncThunk('auth/feedback',async(feedBackData,thunkAPI)=>{
    try {
        return await authSerivces.feedbackService(feedBackData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const authSlice = createSlice({
    name:"auth",
    initialState:intialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registrationSlice.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
            state.isSuccess = false;
            state.RegisterToast = toast.loading("Registering For Section")
        })
        .addCase(registrationSlice.fulfilled,(state,action)=>{
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            state.AlreadyRegisterd = action.payload
            if(action.payload && action.payload?.status === 201){
                toast.update(state.RegisterToast, {
                    render: "Registered And Confirmation Mail Generated",
                    type: toast.TYPE.SUCCESS,
                    isLoading: false,
                    autoClose: 3000,
                });
            } 
            else if(action.payload && action.payload?.status === 301){
                toast.update(state.RegisterToast, {
                    render: "Registered Error in Mail Generation",
                    type: toast.TYPE.INFO,
                    isLoading: false, 
                    autoClose: 3000,
                });
            }
            else{
                toast.update(state.RegisterToast, {
                    render: action.payload?.message,
                    type: toast.TYPE.ERROR,
                    isLoading: false, 
                    autoClose: 3000,
                });
            }          
        })
        .addCase(registrationSlice.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message =action.error
        })
        .addCase(contact.pending,(state,action)=>{
            state.isError = false
            state.isLoading = true
            state.isSuccess = false
            state.EmailToast = toast.loading("Sending Feedback")
        })
        .addCase(contact.fulfilled,(state,action)=>{
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            state.ContactSuccess = action.payload
            if(state.ContactSuccess && state.ContactSuccess?.status === 201){
                toast.update(state.EmailToast, {
                    render: "Sent And Confirmation Mail Generated",
                    type: toast.TYPE.SUCCESS,
                    isLoading: false,
                    autoClose: 3000,
                });
            }
            else if(state.ContactSuccess && state.ContactSuccess?.status === 301){
                toast.update(state.EmailToast, {
                    render: "Feedback Received Error in Mail Generation",
                    type: toast.TYPE.INFO,
                    isLoading: false, 
                    autoClose: 3000,
                });
            }
            else{
                toast.update(state.EmailToast, {
                    render: "Unexpected Error in Generating Mail",
                    type: toast.TYPE.ERROR,
                    isLoading: false, 
                    autoClose: 3000,
                });
            }
        })
        .addCase(contact.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message =action.error
        })
        .addCase("Reset_all",()=>intialState)
        builder.addCase(feedback.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(feedback.fulfilled,(state,action)=>{
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            if(action.payload?.error)
            {
                toast.error(action.payload?.error)
            }
            else
            {
                toast.success('FeedBack Submitted')
            }
        })
        .addCase(feedback.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message =action.error
        })
    }
})

export default authSlice.reducer