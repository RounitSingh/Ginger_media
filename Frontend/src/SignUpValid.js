

// const SignUpValid= (values ) => {

//     let error={}
//     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//  //   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


//     if(values.name === ""){
//         error.name="Name should not be empty "
//     }
//     else {
//         error.name= ""
//     }
//     if(values.email === ""){
//         error.email="Name should not be empty "
//     }
//     else if (!email_pattern.test(values.email)) {
//         error.email="Email Didn't match "
//     }else {
//         error.email=""
//     }

//     if(values.password===""){
//         error.password="Password should not be empty "
//     }
//     else if(!password_pattern.test(values.password)) {
//         error.password= "Password didn't match"
//     }
//     else {
//         error.password=""
//     }
//     return error;







  
// }

// export default SignUpValid;

const SignUpValid = (values) => {
    let errors = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name) {
        errors.name = "Name is required.";
    }

    if (!values.email) {
        errors.email = "Email is required.";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Invalid email format.";
    }

    if (!values.password) {
        errors.password = "Password is required.";
    }

    return errors;
};

export default SignUpValid;
