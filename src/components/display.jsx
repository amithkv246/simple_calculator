import React from "react";

export default function Display({calculation, result}) {
    return(
        <React.Fragment>
           <div>
            {
                calculation ? (
                    calculation
                ) : (
                    0
                )
            }
            </div> 
        </React.Fragment>
    )
}