import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

// 1. Definim ce date (props) va primi email-ul nostru
export interface EmailConfirmarePlataProps {
  numeClient: string;
  linkGhid1: string;
  linkGhid2: string;
  orderId: string;

}

const LOGO_URL = 'https://www.activeboost.ro/activeboost.png'; // Pune aici un link către logo



export const EmailConfirmarePlata: React.FC<EmailConfirmarePlataProps> = ({
  numeClient,
  linkGhid1,
  linkGhid2,
  orderId,

  
}) => {

  // Construiește link-ul magic
const linkWaitList = `${process.env.NEXT_PUBLIC_BASE_URL}/api/join-waitlist?id=${orderId}`;


  return (
    <Html lang="ro">
      <Head />
      <Preview>Felicitări! Ghidul tău Active Boost a sosit!</Preview>
      
      {/* 2. <Tailwind> este esențial. 
          Acesta va converti toate clasele de mai jos în CSS inline. */}
      <Tailwind>
        <Body className=" text-gray-800 font-sans">
          <Container className="bg-white border border-gray-200 rounded-lg shadow-sm my-10 mx-auto p-8 max-w-sm">
            
            {/* Logo (Opțional, dar recomandat) */}
            <Section className="mt-4 mb-8 text-center">
              <Img src={LOGO_URL} width="180" alt="Active Boost Logo" className="mx-auto" />
            </Section>

            <Heading className="text-3xl font-bold text-black text-center">
              Felicitări, {numeClient}!
            </Heading>

            <Section className="mt-6 ">
              <Text className="text-lg leading-7 mx-2">
                Sunt Adrian și vreau să te felicit personal! Ai făcut primul și cel mai important pas către o viață cu mai multă energie și control. Sunt foarte mândru de decizia ta.
              </Text>
              <Text className="text-lg leading-7 font-semibold text-black mx-2">
                Gata cu așteptarea. Găsești mai jos link-urile securizate pentru a descărca pachetul tău complet:
              </Text>
            </Section>

            {/* Secțiunea de Butoane de Download */}
            <Section className="text-center mt-8">
              <Button
                className="font-semibold text-lg  bg-blue-500 p-4   border-2  border-solid mt-5 mb-2  text-white rounded-md"
                href={linkGhid1}
              >
                Descarcă "Ghid Arta Hidratării"
              </Button>
              <Text className="my-2 text-gray-600">si</Text>
              <Button
                className="font-semibold text-lg  bg-[#8ecb40ff] p-4   border-2 border-solid mt-5 mb-2 text-white rounded-md"
                href={linkGhid2}
              >
                Descarcă "Ghid 10 Hack-uri Simple"
              </Button>
            </Section>

            <Section className="mt-8">
              <Text className="text-lg leading-7 mx-2">
                Îți recomand să salvezi ambele fișiere PDF pe telefon sau laptop pentru a le avea mereu la îndemână. Acesta este doar începutul călătoriei noastre împreună.
              </Text>
              <Text className="text-lg leading-7 mx-2">Spor la citit!</Text>
              <Text className="text-lg leading-7 mt-4 mx-2">
                Cu drag,
                <br />
                Adrian, Fondator Active Boost
              </Text>
            </Section>

            {/* Secțiunea P.S. (Lista de Așteptare) */}
            <Section className="mt-10 pt-6 border-t border-gray-300">
              <Heading as="h2" className="text-xl font-semibold text-black mx-5">
                P.S.: O Invitație Specială Doar Pentru Tine...
              </Heading>
              <Text className="text-base leading-6 mx-2">
                După ce vei parcurge ghidul, s-ar putea să te gândești: “Bun, dar ce fac în zilele in care pur și simplu NU AM TIMP să gătesc?"
              </Text>
              <Text className="text-base leading-6 mx-2">
                Tocmai de aceea, pregătesc lansarea programului premium "Start Activ"...
              </Text>

              <Text className="text-base leading-6 mx-2">
                Este vorba despre un program de nutriție personalizat, conceput special ca o alternativă pentru diminețile pe fugă. În loc să cedezi și să cumperi un covrig, un pateu sau un croissant care îți prăbușesc energia, vei avea o soluție gata în doar 2 minute: un mic dejun complet, sub forma unui shake delicios, plin de vitamine și minerale, pe care îl poți lua cu tine și îl poți bea în drum spre serviciu.
              </Text>
              <Text className="text-base leading-6 mx-2">
                Ca mulțumire pentru încrederea acordată, ești invitat să te înscrii pe lista de așteptare exclusivă. 
              </Text>
              <Text className="text-base leading-6 mx-2">
                Vei fi primul care află când se lansează și vei primi o ofertă specială.
              </Text>
              <Button
                className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-md mt-4 text-center m-5"
                href={linkWaitList}
              >
                DA, Vreau să mă înscriu pe Lista de Așteptare!
              </Button>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailConfirmarePlata;