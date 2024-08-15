import TextDisplaying from '../../TextDisplaying'
import  UserImage  from '../../../../assets/images/spider.jpg'
import './style.scss'

import React from 'react'

const Account = () => {
  return (
    <div className="user_information">
      <img className="avatar" src={UserImage} alt="avt" />
      <TextDisplaying textContent="Ho Van Hieu" fontSize="20px" fontWeight="600" color="var(--grey-color)"></TextDisplaying>
    </div>
  )
}

export default Account