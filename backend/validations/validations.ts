import * as yup from "yup";

const newUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phone: yup.string().length(10).required(),
});

const loginUserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const isUserDataValid = (
  name: string,
  email: string,
  password: string,
  phone: string
): Promise<boolean> => {
  const isValid = newUserSchema
    .isValid({
      name,
      email,
      password,
      phone,
    })
    .then((v) => {
      return v;
    })
    .catch((e) => {
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
    .catch((e) => {
      return false;
    });

  return isValid;
};