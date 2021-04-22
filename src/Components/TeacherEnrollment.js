import includesLetters from './helpers'

import { Component } from 'react';

export default class TeacherEnrollment extends Component {
    state = {
        name: '',
        subject: '',
        email: '',
        zipCode: '',
        phoneNumber: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {averageGPA, studentCount} = this.props;
        const {name, subject, email, zipCode, phoneNumber} = this.state;
        if(!name || !subject || !email){
            window.alert('Input is invalid');
        } else if (phoneNumber.length !== 10 || includesLetters(phoneNumber)){
            window.alert('Phone number is not valid');
        } else if (zipCode.length !== 5 || includesLetters(zipCode)){
            window.alert('Zip code is not valid');
        }
        window.alert(`You are now the teacher
                    You have ${studentCount} students
                    The average GPA is ${averageGPA.toFixed(2)}`)
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
    render(){
        const {name, subject, email, zipCode, phoneNumber} = this.state;
        return (
            <section>
                <h2>Teacher Enrollment</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input id='name' name='name' value={name} onChange={this.handleChange}/>
                    <label htmlFor='subject'>Subject</label>
                    <input id='subject' name='subject' value={subject} onChange={this.handleChange}/>
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' value={email} onChange={this.handleChange}/>
                    <label htmlFor='zipCode'>Zip Code</label>
                    <input id='zipCode' name='zipCode' value={zipCode} onChange={this.handleChange}/>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input id='phoneNumber' name='phoneNumber' value={phoneNumber} onChange={this.handleChange}/>
                    <button>Teach Class</button>
                </form>
            </section>
        )
    }
}