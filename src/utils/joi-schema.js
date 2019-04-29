import Joi from "react-native-joi";

export const getLoginSchema = () => ({
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required()
    .trim()
    .lowercase()
    .label("Field: Email"),
  password: Joi.string()
    .required()
    .min(6)
    .max(15)
    .required()
    .trim()
    .label("Field: Password")
});
