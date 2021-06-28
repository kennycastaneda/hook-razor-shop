const API_BASE_URL =
   process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

/**
 * Defines the default headers for these functions to work with `json-server`
 */

const STRIPE_TEST =
   process.env.STRIPE_TEST || "pk_live_bo67iFEjtZkAeH5mMPRbwEOc00irQCQ413";
const headers = new Headers();
const stripe = window.Stripe(`${STRIPE_TEST}`);
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
   try {
      const response = await fetch(url, options);

      if (response.status === 204) {
         return null;
      }

      const payload = await response.json();

      if (payload.error) {
         return Promise.reject({ message: payload.error });
      }
      return payload.data;
   } catch (error) {
      if (error.name !== "AbortError") {
         console.error(error.stack);
         throw error;
      }
      return Promise.resolve(onCancel);
   }
}
export async function createSubscribe(email, signal) {
   const url = `${API_BASE_URL}/subscribe`;
   const data = { data: email };

   const options = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
      signal,
   };
   return await fetchJson(url, options);
}
export async function createCheckout(quantities) {
   const data = { data: quantities };
   console.log(data);
   fetch(`${API_BASE_URL}/checkout`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
   })
      .then(function (response) {
         return response.json();
      })
      .then(function (session) {
         return stripe.redirectToCheckout({ sessionId: session.id });
      })
      .then(function (result) {
         // If redirectToCheckout fails due to a browser or network
         // error, you should display the localized error message to your
         // customer using error.message.
         if (result.error) {
            alert(result.error.message);
         }
      })
      .catch(function (error) {
         console.error("Error:", error);
      });
}
