import { Link } from "react-router-dom";
const Platform = ({platform}) =>{
    return (
        <Link to={`/platforms/${platform.id}`}>
        {platform.name}
        </Link>
        )
};

export default Platform;