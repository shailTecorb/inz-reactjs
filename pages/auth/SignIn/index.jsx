import { Fragment } from "react"
import dynamic from 'next/dynamic';
const SignIn = dynamic(() => import('../../../components/Auth/Sign_in'), {
    ssr: false
  })

const LogIn = () => {
    return (
        <Fragment>
            <SignIn />
            
        </Fragment>
    )
}
export default LogIn