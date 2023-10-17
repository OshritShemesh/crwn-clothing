import { useState } from "react";

//components
import FormInpot from "../form-input/form-input.component";
import Button from "../button/button.component";

//styles
import "../sign-up-form/sign-up-form.styles.scss";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const userDocRef = await createUserDocumentFromAuth({
        ...user,
        displayName: displayName,
      });

      resetFormFields();
    } catch (error) {
      console.log(error);
      if (error.code == "auth/email-already-in-use")
        alert("this email address is already in use.");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInpot
          label="Display Name"
          type="text"
          required
          onChange={handleFieldChange}
          name="displayName"
          value={displayName}
        />

        <FormInpot
          label="Email"
          type="email"
          required
          onChange={handleFieldChange}
          name="email"
          value={email}
        />

        <FormInpot
          label="Password"
          type="password"
          required
          onChange={handleFieldChange}
          name="password"
          value={password}
        />

        <FormInpot
          label="Confirm Password"
          type="password"
          required
          onChange={handleFieldChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
