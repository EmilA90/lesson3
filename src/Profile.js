import React from 'react'
import { Adress } from './components/Adress'
import { Email } from './components/Email'
import { Name } from './components/Name'

export const Profile = (props) => {
  return (
    <>
    
    <Name /> <span>{ props.name }</span><br/>
    <Email /> <span>{ props.email }</span><br/>
    <Adress/> <span>{ props.address }</span><br/>
    <br/>


    </>
  )
}
