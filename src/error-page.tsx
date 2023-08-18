import { isRouteErrorResponse, useRouteError } from "react-router";
import React from 'react';

function ErrorPage(){
    const error = useRouteError()
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        // error is type `ErrorResponse`
        errorMessage = error.error?.message || error.statusText;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else {
        console.error(error);
        errorMessage = 'Unknown error';
      }

      
    console.error(error);
    return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      );
}

export default ErrorPage;