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

const LOGO_URL = 'https://www.activeboost.ro/logo.png'; // Pune aici un link către logo



export const EmailConfirmarePlata: React.FC<EmailConfirmarePlataProps> = ({
  numeClient,
  linkGhid1,
  linkGhid2,
  
  
}) => {




  return (
    <Html lang="ro">
      <Tailwind>
        <Head />
        <Preview>Felicitări! Pachetul tău Active Boost a sosit!</Preview>
        <Body className="text-gray-700 font-sans bg-gray-50">
          {/* Header with gradient background */}
          <Section className="bg-gradient-to-r from-[#8ecb40] to-[#7ab838] px-0">
            <Container className="max-w-2xl pt-12 pb-8">
              <Section className="text-center">
                <Img src={LOGO_URL} width="160" alt="Active Boost Logo" className="mx-auto" />
              </Section>
            </Container>
          </Section>

          {/* Main Content */}
          <Container className="bg-white max-w-2xl mx-auto shadow-lg">
            
            {/* Welcome Section */}
            <Section className="px-8 pt-12 pb-6">
              <Heading className="text-4xl font-bold text-gray-900 text-center m-0 mb-4">
                Felicitări, {numeClient}! 🎉
              </Heading>
              <Text className="text-center text-[#8ecb40] font-semibold text-lg m-0">
                Ești acum parte din comunitatea Active Boost
              </Text>
            </Section>

            {/* Divider */}
            <Section className="px-8">
              <div className="border-t border-gray-200"></div>
            </Section>

            {/* Personal Message */}
            <Section className="px-8 py-8">
              <Text className="text-gray-700 text-base leading-8 m-0 mb-4">
                Sunt Adrian și vreau să te felicit personal! 
                <br />
                <br />
                Ai făcut primul și cel mai important pas către o viață cu mai multă energie și control. Sunt foarte mândru de decizia ta.
              </Text>
              <Text className="text-gray-900 font-semibold text-base leading-8 m-0">
                Gata cu așteptarea. Găsești mai jos link-urile securizate pentru a descărca pachetul tău complet:
              </Text>
            </Section>

            {/* Download Buttons Section */}
            <Section className="px-8 py-12">
              <Section className="mb-6 mx-50">
                <Button
                  className="bg-blue-500 rounded-full cursor-pointer text-[#0a1a02]  shadow-[0_0_20px_rgba(125,193,66,0.3)] text-lg p-5 font-bold w-base"
                  href={linkGhid1}
                >
                   Descarcă "Ghid Arta Hidratării"
                </Button>
              </Section>
              
              <Section className="text-center mb-6">
                <Text className="text-gray-400 text-sm m-0">și</Text>
              </Section>
              
              <Section className='mx-50'>
                <Button
                  className="bg-[#7dc142]  rounded-full cursor-pointer text-[#0a1a02] 
                  shadow-[0_0_20px_rgba(125,193,66,0.3)] text-base p-6 font-bold w-base"
                  href={linkGhid2}
                >
                 Descarcă "Ghid 10 Hack-uri Simple"
                </Button>
              </Section>
            </Section>

            {/* Info Section */}
            <Section className="px-8 py-8 bg-gray-50 rounded-b-lg">
              <Text className="text-gray-700 text-base leading-7 m-0 mb-4">
                💡 <strong>Sfat:</strong> Salvează ambele fișiere PDF pe telefon sau laptop pentru a le avea mereu la îndemână. Acesta este doar începutul călătoriei noastre împreună.
              </Text>
              <Text className="text-gray-600 text-base leading-7 m-0 mb-6">
                Spor la citit și la transformare! 
              </Text>
            </Section>

            {/* Signature */}
            <Section className="px-8 py-8 border-t border-gray-200">
              <Text className="text-gray-700 text-base m-0 mb-2">Cu drag,</Text>
              <Text className="text-gray-900 font-bold text-base m-0">
                Adrian
              </Text>
              <Text className="text-[#8ecb40] font-semibold text-sm m-0">
                Fondator, Active Boost
              </Text>
            </Section>

          </Container>

          {/* Footer */}
          <Section className="text-center py-8">
            <Text className="text-gray-500 text-xs m-0">
              © 2026 Active Boost. Toate drepturile rezervate.
            </Text>
            <Text className="text-gray-400 text-xs m-0 mt-2">
              Acest email a fost trimis la adresa ta de contact asociată cu comanda.
            </Text>
          </Section>

        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailConfirmarePlata;