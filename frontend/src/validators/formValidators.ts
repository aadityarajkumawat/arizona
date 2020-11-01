import * as Yup from "yup";
const signUpFormDataSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().required(),
  password: Yup.string().min(8).required(),
  phone: Yup.string().length(10).required(),
});

const loginUserSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const isUserDataValid = (
  name: string,
  email: string,
  password: string,
  phone: string
): Promise<boolean> => {
  const isValid = signUpFormDataSchema
    .isValid({
      name,
      email,
      password,
      phone,
    })
    .then((v) => {
      return v;
    })
    .catch(() => {
      return false;
    });

  return isValid;
};

export const isLoginDataValid = (
  email: string,
  password: string
): Promise<boolean> => {
  const isValid = loginUserSchema
    .isValid({
      email,
      password,
    })
    .then((v) => {
      return v;
    })
    .catch(() => {
      return false;
    });

  return isValid;
};
