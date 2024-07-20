import {
  FaRegChartBar,
  FaBookOpen,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";

export default function Help() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              ¿En qué te puedo ayudar?
            </h2>
            <h5 className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white">
              En potenciar tu <span className="text-muted-foreground">Startup, negocio o empresa.</span></h5>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2 lg:grid-rows-2">
          <div className="grid gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2 text-white">
                <FaBookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg text-white font-bold">Desarrollo Web</h3>
            </div>
            <p className="text-sm text-white text-muted-foreground">
              Creación y el mantenimiento de sitios web y aplicaciones web desde
              el diseño y la programación hasta la gestión de bases de datos y
              la optimización para motores de búsqueda.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2 text-white">
                <FaClipboardList className="h-6 w-6" />
              </div>
              <h3 className="text-lg text-white font-bold">
                Desarrollo de Landing Pages
              </h3>
            </div>
            <p className="text-sm text-white text-muted-foreground">
              Desarrollo de landing pages asegurando que cada elemento de la
              página esté cuidadosamente diseñado para captar la atención del
              usuario y dirigirlo hacia una acción específica.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2 text-white">
                <FaCog className="h-6 w-6" />
              </div>
              <h3 className="text-lg text-white font-bold">
                Desarrollo de Software
              </h3>
            </div>
            <p className="text-sm text-white text-muted-foreground">
              Desarrollo de soluciones de software a medida, enfocadas en la
              optimización de sistemas internos de gestión y la implementación
              de modelos de negocio innovadores. Abarcamos desde la
              planificación y el diseño hasta la implementación y el soporte
              continuo, asegurando que las soluciones se alineen perfectamente
              con las necesidades y objetivos estratégicos de tu empresa.
            </p>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-2 text-white">
                <BarChartIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg text-white font-bold">E-commerce</h3>
            </div>
            <p className="text-sm text-white text-muted-foreground">
              Desarrollo integral de plataformas de comercio electrónico,
              abarcando desde la creación y gestión de catálogos de productos
              hasta la integración de sistemas de pago seguros y la optimización
              de la experiencia del usuario para maximizar las conversiones y la
              satisfacción del cliente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function ClipboardListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
