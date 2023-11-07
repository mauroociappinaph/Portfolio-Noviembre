import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().email("El correo electrónico no es válido").required("El correo electrónico es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

const Formulario = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Aquí puedes manejar el envío del formulario, por ejemplo, realizar una solicitud a un servidor.
    // Cuando el envío sea exitoso, puedes actualizar el estado o mostrar un mensaje de confirmación.
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="bg-secondary p-4">
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
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-bold text-primary">
                Nombre:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded focus:ring focus:ring-primary"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-bold text-primary">
                Correo Electrónico:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded focus:ring focus:ring-primary"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-bold text-primary">
                Mensaje:
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="w-full p-2 border rounded focus:ring focus:ring-primary"
              />
              <ErrorMessage name="message" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.2 }}
                disabled={isSubmitting}
                className={`w-full p-2 text-white font-bold rounded bg-primary ${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </motion.button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formulario;
