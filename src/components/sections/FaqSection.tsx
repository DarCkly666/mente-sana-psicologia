import {
  fontPoppins300,
  fontPoppins500,
  fontPoppins700,
} from "@/utils/MyFonts";
import Image from "next/image";
import React from "react";

export default function FaqSection() {
  return (
    <section
      className={`w-full px-6 sm:px-12 md:px-20 lg:px-32 2xl:px-72 py-28 bg-gray-100 text-dark-blue ${fontPoppins300.className}`}
    >
      <div className="flex flex-col gap-5">
        <p
          className={`text-light-blue text-center ${fontPoppins500.className}`}
        >
          FAQ
        </p>
        <p
          className={`text-3xl md:text-5xl text-center ${fontPoppins700.className}`}
        >
          Preguntas Frecuentes
        </p>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <details className="py-2 border-b border-gray-300">
              <summary className={`cursor-pointer ${fontPoppins500.className}`}>
                ¿Cómo funciona la primera sesión gratuita?
              </summary>
              <div className="text-gray-500">
                <p>
                  Es muy sencillo, solamente es necesario pulsar alguno de los
                  botones de probar primera sesión gratuita, rellenar tus datos
                  de contacto indicando una franja horaria en función de tu
                  disponibilidad y tu nuevo psicólogo te agendará la cita. Sin
                  compromiso y sin introducir ningún dato de pago.
                </p>
                <br />
                <p>
                  ¿No lo consigues? No te preocupes, puedes solicitar su prueba
                  gratuita a través de nuestro teléfono de contacto o vía
                  Whatsapp
                </p>
              </div>
            </details>
            <details className="transition-all py-2 border-b border-gray-300">
              <summary className={`cursor-pointer ${fontPoppins500.className}`}>
                ¿Cuánto dura la terapia completa?
              </summary>
              <p className="text-gray-500">
                Aunque esto depende de muchos factores (implicación, voluntad de
                cambio..) Mente Sana recomienda una media de 5 meses de terapia,
                teniendo como referencia los 6 meses que son necesarios de modo
                presencial. Queremos recalcar los factores que determinan el
                tiempo de la terapia, pues, según la persona puede haber un
                avance más rápido o más lento.
              </p>
            </details>
            <details className="transition-all py-2 border-b border-gray-300">
              <summary className={`cursor-pointer ${fontPoppins500.className}`}>
                ¿Qué áreas tratamos?
              </summary>
              <p className="text-gray-500">
                Contamos con psicólgos especialistas en todas las ramas de la
                psicología con más de 15 años de experiencia en el tratamiento
                de pacientes en sus respectivas especialidades.
              </p>
            </details>
            <details className="transition-all py-2 border-b border-gray-300">
              <summary className={`cursor-pointer ${fontPoppins500.className}`}>
                ¿Qué plataformas debo usar para realizar terapia con mi
                psicólogo?
              </summary>
              <p className="text-gray-500">
                Nosotros usamos la plataforma Google Meet para realizar las
                videollamadas con nuestros psicólogos.
              </p>
            </details>
          </div>
          <div className="w-full md:w-1/2 flex items-start justify-center">
            <div className="w-96 h-96 grid place-items-center">
              <Image
                src="/images/faq-min.svg"
                alt="FAQ"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
