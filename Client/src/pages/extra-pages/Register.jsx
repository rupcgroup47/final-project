import { useState } from 'react';

// material-ui
import { Button, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets

// ============================|| FIREBASE - LOGIN ||============================ //

const Register = () => {
    const [userArr, setUsers] = useState([]);
    const [validationsMsg, setMsg] = useState('');
    console.log(userArr);
    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            id: e.target.elements.id.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        };
        if (userArr.some((user) => user.email === e.target.elements.email.value)) {
            setMsg('האימייל כבר קיים במערכת');
        } else {
            setUsers([...userArr, newUser]);
            setMsg('');
            console.log(userArr);
        }
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('האימייל חייב להיות תקין').max(255).required('האימייל הוא חובה'),
                    password: Yup.string().min(2, 'סיסמה צריכה להיות יותר מ2 תווים').max(10).required('הסיסמה היא חובה') //Add validations
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} style={{ direction: 'rtl' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="firstName-login">שם פרטי</InputLabel>
                                    <OutlinedInput
                                        id="firstName"
                                        type="text"
                                        value={values.firstName}
                                        name="firstName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="lastName-login">שם משפחה</InputLabel>
                                    <OutlinedInput
                                        id="lastName"
                                        type="text"
                                        value={values.lastName}
                                        name="lastName"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="id-login">תעודת זהות</InputLabel>
                                    <OutlinedInput
                                        id="id"
                                        type="number"
                                        value={values.id}
                                        name="id"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">כתובת אימייל</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="הכנס כתובת דואל"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-login">סיסמה</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        id="-password-login"
                                        type="text"
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="הכנס סיסמה"
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={10}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        הרשמה
                                    </Button>
                                </AnimateButton>
                                <Typography variant="h6">{validationsMsg}</Typography>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Register;
