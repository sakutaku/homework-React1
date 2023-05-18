import React from "react";

interface ICircleProps {
    num: number;
}
const Circle: React.FC<ICircleProps> = props => {
    return(
        <div className="circle">
            <span>{props.num}</span>
        </div>
    );
};

export default Circle;