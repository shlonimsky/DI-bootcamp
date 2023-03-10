import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props){
        super()
        this.state = {
            error: null,
            errorInfo : null
        }
    }

    componentDidCatch(error,errorInfo){
        this.setState({error : error,errorInfo: errorInfo})
    }

    render (){
        if (this.state.error){
        return (
            <div>
               Something went wrong
            </div>
        )
        } 
        return  (
            this.props.children
        )
    }
}

export default ErrorBoundary