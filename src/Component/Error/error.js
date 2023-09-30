import { FaServer } from "react-icons/fa"
import notFound from '../../images/notFound.png';
import '../../css/ErrorStyle/error.css';
import { CiWarning } from "react-icons/ci";
const Error = () => {
    return (
        <div className="text-center mt-5">
            <img src={notFound} draggable='false'/>
           <h1 className="d text-center">
             <CiWarning/>
              Error 404!
           </h1>
           <p className="text-center">This Page Is Not Found</p>
        </div>
    )
}

export default Error;