import { useNavigate, useParams } from "react-router-dom";
// this is to use useNavigate in class component
export const withRouter = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        const params = useParams();
        return <Component navigate={navigate} params={params} {...props} />;
    };

    return Wrapper;
};
