import { useCreateSubscriberMutation } from "../graphql/generated";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Subscribe = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center ">
      <div className="w-full max-w-[1100px] flex flex-col items-center justify-between mt-10 lg:flex-row lg:mt-20 mx-auto before:block before:max-w-[1100px] before:absolute before:w-full before:h-full before:bg-[url(../src/assets/React-icon.svg)] before:bg-no-repeat before:bg-top before:bg-contain before:lg:bg-center before:lg:bg-auto">
        <div className="max-w-[640px] ">
          <div className="w-full flex items-center justify-center">
            <Logo />
          </div>

          <h1 className="mt-8 py-1 text-4xl text-center lg:text-left lg:text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com<strong className="text-blue-500"> React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed text-center text-sm lg:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="mt-8 p-8 bg-gray-700 border border-gray-500 rounded w-full lg:mt-0 lg:w-auto">
          <strong className="text-2xl block mb-6">
            Increva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14 "
            />
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14 "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 tfransition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="../src/assets/code-mockup.png" alt="" className="mt-10" />
    </div>
  );
};
