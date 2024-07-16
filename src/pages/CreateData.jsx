import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import TextError from '../components/TextError';



export const loader = async() => {
    // getting data from API using axios
    const getBooks = await axios.get('https://668a5df82c68eaf3211c9bc7.mockapi.io/books')

    return {books: getBooks.data}
    
}
// setting initial values for form data
const initialValues = {
        title: '',
        isbnNum: '',
        pubDate: '',
        authName: '',
        dob: '',
        bio: ''
    
    }
    // form validation
    const validate = values => {
    
                const errors = {};
        
                if(!values.title) {
                    errors.title = 'Title is required'
                }
              
                if(!values.isbnNum) {
                    errors.isbnNum = 'Book ISBN Number is required'
                }
              
                if(!values.pubDate) {
                    errors.pubDate = 'Book Published Date is required'
                }
                if(!values.authName) {
                    errors.authName = 'Author Name is required'
                }
              
                if(!values.dob) {
                    errors.dob = 'Author Date Of Birth is required'
                }
        
                return errors;
            }
    // submitting filled form
    const onSubmit = async (values, { resetForm }) => {
    
        let newBook = {
            title: values.title,
            isbnNum: values.isbnNum,
            pubDate: values.pubDate,
            authName: values.authName,
            dob: values.dob,
            bio: values.bio
        }
        //adding new data to exisiting data in API using axios (post request)
        await axios.post('https://668a5df82c68eaf3211c9bc7.mockapi.io/books/', newBook)
        //alert for successfull submission of the form
        alert('New Book Added Succesfully !!!')
        //resetting form after submission
        resetForm()
        
    }



const CreateData = () => { 


  return (
    <div className='container'>
        <div className='row mt-3'>
            <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            >
                <Form className='form'>
                    <div className="row">
                        <div className="col p-2">
                            <div><h3>Book Details :</h3></div>
                            <div className='form-control mt-2'>
                                <label htmlFor='title'>Book Title: *</label><br/>
                                <Field
                                    className='mt-2' 
                                    type="text" 
                                    id='title'
                                    name='title'
                                /><br/>
                                <ErrorMessage name='title' component={TextError}/>
                            </div>
                            <div className='form-control mt-2'>
                                <label htmlFor='isbnNum'>ISBN Number: *</label><br/>
                                <Field
                                    className='mt-2' 
                                    type="number" 
                                    id='isbnNum' 
                                    name='isbnNum'
                                    
                                /><br/>
                                <ErrorMessage name='isbnNum' component={TextError}/>                            
                            </div>
                            <div className='form-control mt-2'>
                                <label htmlFor='pubDate'>Publication Date: *</label><br/>
                                <Field
                                    className='mt-2' 
                                    type="date" 
                                    id='pubDate' 
                                    name='pubDate'  
                                /><br/>
                                <ErrorMessage name='pubDate' component={TextError}/>
                            </div>
                        </div>
                        <div className="col p-2">
                            <div><h3>Author Details: *</h3></div>
                            <div className='form-control mt-2'>
                                <label htmlFor='authName'>Author Name: *</label><br/>
                                <Field 
                                    className='mt-2'
                                    type="text" 
                                    id='authName'
                                    name='authName'
                                /><br/>
                                <ErrorMessage name='authName' component={TextError}/>
                            </div>
                            <div className='form-control mt-2'>
                                <label htmlFor='dob'>Date Of Birth: *</label><br/>
                                <Field
                                    className='mt-2'
                                    type="date" 
                                    id='dob' 
                                    name='dob'
                                /><br/>
                                <ErrorMessage name='dob' component={TextError}/>
                            </div>
                            <div className='form-control mt-2'>
                                <label htmlFor='bio'>Short Biography: (optional)</label><br/>
                                <Field
                                    className='mt-2'
                                    type="textarea" 
                                    id='bio' 
                                    name='bio'
                                /><br/>
                                <ErrorMessage name='bio' component={TextError}/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 text-center'>
                        <button type='submit' className='btn btn-primary m-5 btn-lg fw-bold' > Add to list</button>
                    </div>
                </Form>
            </Formik>
        </div>
    </div>
  )
}

export default CreateData