import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import axios from "axios";

//!SECTION Validación Form con YUP
const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

const Formulario = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      if (!values || !setSubmitting || !resetForm) {
        throw new Error("Missing required parameters");
      }

      console.log("Submitting form...");

      const response = await axios.post(
        "https://formspree.io/f/mqazarvb",
        values
      );
      console.log(response);
      console.log("Form submitted successfully");
      alert("Formulario enviado correctamente");
      resetForm(); // Limpia los campos del formulario
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error al enviar el formulario");
    } finally {
      if (setSubmitting) {
        setSubmitting(false);
      }
      console.log("Form submission complete");
    }
  };
  return (
    <div className="bg-secondary py-8">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-5xl text-white font-bold text-center mb-6">
          Contacto
        </h1>
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
                  {isSubmitting ? "Enviando..." : "ENVIAR"}
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
