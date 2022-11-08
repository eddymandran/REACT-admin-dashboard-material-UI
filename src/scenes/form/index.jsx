import {Box, Button, TextField} from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;// Validation Schema
const userSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Contact Number is required"),
    address1: yup.string().required("Address Line 1 is required"),
    address2: yup.string().required("Address Line 2 is required"),
});

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleFormSubmit = (values) => {
            console.log(values);
        }
    ;
    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile"/>
            <Formik initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                    validationSchema={userSchema}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid"
                             gap="30px"
                             gridTemplateColumns="repeat(4, minmax(0,1 fr))"
                             sx={{
                                 "& > div": {gridColumn: isNonMobile ? undefined : "span 4"},
                             }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                //convert to boolean using !! operator
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                //convert to boolean using !! operator
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                //convert to boolean using !! operator
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                //convert to boolean using !! operator
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address Line 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                //convert to boolean using !! operator
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address Line 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                //convert to boolean using !! operator
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{gridColumn: "span 4"}}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" variant="contained" color="secondary">
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form;
