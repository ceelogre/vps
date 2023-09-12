import React from 'react'
import "./home.css"

const welcomeNote = "Welcome to your Virtual Private Server"

const ContactList = (props) => {
    const people = props.contacts
    return `People to contact: ${people.firstContact} and ${people.secondContact}`
}
const ContactsComponent = () => {
    return (
            <ContactList contacts = {{firstContact: "Sam", secondContact: "Lucas"}} />
    )
}

const Body = () => {
    return (
        <div>
            <h1>{welcomeNote}</h1>
        </div>
    ) 
}

const HomePage = () => {
    return (
        <div>
            <Body />
            <ContactsComponent />
        </div>
    )
}

export default HomePage