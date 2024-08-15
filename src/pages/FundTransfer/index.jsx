import React from 'react'
import CheckoutStage from '../../components/childComponents/CheckoutStage'

const FundAndTransfer = () => {
  const name =' hieu'
  const imageUrl = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'

  return (
    <CheckoutStage user={{name, imageUrl}} amount="20" />
  )
}

export default FundAndTransfer