
// const baseUrl = "https://localhost:44355/api/";

// export const UserContoroller = "User";
// export const ProductCpontroller = "Product";
// export const MethodType = Object.freeze({ GET: "GET", POST: "POST", PUT: "PUT", DELETE: "DELETE" })


// export const Call = (
//     controller, action, methodType, params, successCallback, failurCallback
// ) => {
//     fetch(createUrl(controller, action, methodType, params),
//         {
//             method: methodType,
//             headers: { 'Content-type': 'application/json' },
//             body: (methodType == MethodType.GET || methodType == MethodType.DELETE) ? null : JSON.stringify(params)
//         })
//         .then(res => res.json())
//         .then((res) => {
//             successCallback(res);
//         },
//             (err) => {
//                 failurCallback(err);
//             });
// }

// const createUrl = (controller, action, methodType, params) => {
//     debugger;
//     var fullUrl = baseUrl + controller + "/" + action;
//     if (methodType == MethodType.GET || methodType == MethodType.DELETE) {
//         for (let index = 0; index < params.length; index++) {
//             fullUrl += "/" + params[index];
//         }
//     }
//     return fullUrl;
// }