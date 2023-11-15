import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

const Formulario = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
  
      const response = await fetch("http://localhost:3001/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      const result = await response.json();
      console.log(result);
  
      setSubmitSuccess(true);
      resetForm();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="  bg-secondary bg-opacity-75 py-8">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Contacto
        </h1>{" "}
        {/* Nuevo encabezado h1 */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-screen-md mx-auto">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-bold text-white mb-2"
                >
                  Nombre:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded focus:ring focus:ring-primary"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-bold text-white mb-2"
                >
                  Correo Electrónico:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded focus:ring focus:ring-primary"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-bold text-white mb-2"
                >
                  Mensaje:
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border rounded focus:ring focus:ring-primary"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-6">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  disabled={isSubmitting}
                  className={`w-36 p-3 text-white font-bold uppercase rounded bg-primary hover:bg-tertiary hover:shadow-md ${
                    isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "ENVIAR"}{" "}
                  {/* Texto en mayúsculas */}
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Formulario;
