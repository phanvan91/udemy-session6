import React from 'react'
import {Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { createPost } from "../actions";
import {connect} from 'react-redux'
class PostNew extends React.Component {
    renderField (data) {
        return (
            <div className={`form-group ${data.meta.touched  && data.meta.error ? 'has-danger' : ''}`}>
                <label htmlFor="">{data.label}</label>
                <input
                    className={'form-control'}
                    {...data.input}
                    type={data.type}
                />
                <div className={'text-help'}>
                    {data.meta.touched ? data.meta.error : ''}
                </div>
            </div>
        )
    }
    onSubmit (value) {
        this.props.createPost(value,()=>{
            this.props.history.push('/')
        })
    }
    render(){
        const  {handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name={'title'}
                    component={this.renderField}
                    type={'text'}
                    label={'Title'}
                    value={'12345'}
                />
                <Field
                    name={'categories'}
                    component={this.renderField}
                    type={'text'}
                    label={'Categories'}
                />
                <Field
                    name={'content'}
                    component={this.renderField}
                    type={'text'}
                    label={'Posts Content'}
                />

                <button type={'submit'} className={'btn btn-primary'}>Submit</button>
                <Link to={'/'} className={'btn btn-danger'}>Cancel </Link>
            </form>
        )
    }
}
function validate (values) {
    const errors = {};
    if(!values.title || values.title.length < 3) {
        errors.title = "Enter title that is at least 3 char"
    }
    if (!values.categories){
        errors.categories = "Enter categories"
    }
    if (!values.content){
        errors.content = "Enter content"
    }


    return errors
}
export default reduxForm({
    validate : validate,
    form : 'PostsNewForm'
})(
    connect(null,{createPost})(PostNew)
)