import Joi from "react-native-joi";

export const getLoginSchema = () => ({
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .required()
    .trim()
    .lowercase(),
  password: Joi.string()
    .required()
    .min(6)
    .max(15)
    .required()
    .trim()
});
