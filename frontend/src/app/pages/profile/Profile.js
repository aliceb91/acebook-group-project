import react from 'react';
import Header from '../../components/header/Header'

const profile = ({ email }) => {
  console.log(email)
  return (
    <html>
      <Header/>
      <h1>Hello {email}!</h1>
    </html>
  )
}

export default profile;