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
  oId: string;

}

const LOGO_URL = 'https://www.activeboost.ro/activeboost.png'; // Pune aici un link către logo



export const EmailConfirmarePlata: React.FC<EmailConfirmarePlataProps> = ({
  numeClient,
  linkGhid1,
  linkGhid2,
  
  
}) => {




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

           

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailConfirmarePlata;