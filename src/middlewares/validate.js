// src/middleware/validate.js
import Joi from "joi";

/**
 * Dynamic Joi validation middleware
 * @param {Joi.ObjectSchema} schema - Joi schema
 * @param {"body"|"query"|"params"} [property="body"] - Request property to validate
 */
export const validate = (schema, property = "body") => {
  return (req, res, next) => {
    if (!["body", "query", "params"].includes(property)) {
      return res
        .status(500)
        .json({ success: false, errors: ["Invalid property for validation"] });
    }

    const { error } = schema.validate(req[property], { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).json({ success: false, errors });
    }

    next();
  };
};
