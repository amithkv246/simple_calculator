import React from "react";

export default function Display({ calculation, result }) {
    return (
        <React.Fragment>
            <div className="d-flex flex-column text-end">
                <p className="fs-4 fw-bold">
                    {
                        calculation ? (
                            calculation
                        ) : (
                            0
                        )
                    }
                </p>
                <p>{result}</p>
            </div>

        </React.Fragment>
    )
}