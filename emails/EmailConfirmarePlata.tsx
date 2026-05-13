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
        <Body className="font-sans bg-white">
          
          {/* Header */}
          <Container className="max-w-2xl mx-auto">
            <Section className="py-8 border-b border-gray-200">
              <Section className="text-center">
                <Img src={LOGO_URL} width="120" alt="Active Boost Logo" className="mx-auto" />
              </Section>
            </Section>

            {/* Main Content */}
            <Section className="py-8 px-6">
              <Heading className="text-xl font-bold text-gray-900 text-center m-0 mb-2">
                Felicitări, {numeClient}! 🎉
              </Heading>
              <Text className="text-center text-[#8ecb40] font-semibold text-sm m-0 mb-6">
                Ești acum parte din comunitatea Active Boost
              </Text>

              {/* Message */}
              <Text className="text-gray-700 text-xs leading-6 m-0 mb-3">
                Sunt Adrian și vreau să te felicit personal! Ai făcut primul și cel mai important pas către o viață cu mai multă energie și control. Sunt foarte mândru de decizia ta.
              </Text>
              
              <Text className="text-gray-700 text-xs leading-6 m-0 mb-6">
                Gata cu așteptarea. Descarcă cele 2 pachete cu informații valoroase:
              </Text>
            </Section>

            {/* Buttons Section */}
            <Section className="px-6 py-8 bg-gray-50">
              <Section className="mb-4">
                <Section style={{ textAlign: 'center' }}>
                  <Button
                    className="bg-[#8ecb40] text-[#0a1a02] rounded-lg font-bold text-sm py-3 px-6 inline-block"
                    href={linkGhid1}
                  >
                    📖 Ghid Arta Hidratării
                  </Button>
                </Section>
              </Section>

              <Section className="text-center mb-4">
                <Text className="text-gray-400 text-xs m-0">+</Text>
              </Section>

              <Section>
                <Section style={{ textAlign: 'center' }}>
                  <Button
                    className="bg-[#7dc142] text-[#0a1a02] rounded-lg font-bold text-sm py-3 px-6 inline-block"
                    href={linkGhid2}
                  >
                    📖 Ghid 10 Hack-uri Simple
                  </Button>
                </Section>
              </Section>
            </Section>

            {/* Info Box */}
            <Section className="px-6 py-6 bg-blue-50 border-l-4 border-[#8ecb40]">
              <Text className="text-gray-700 text-xs leading-5 m-0 mb-2">
                <strong>💡 Pro Tip:</strong> Salvează ambele PDF-uri pe telefon pentru a le studia oricând.
              </Text>
              <Text className="text-gray-600 text-xs leading-5 m-0">
                Acesta este doar începutul calătoriei noastre împreună!
              </Text>
            </Section>

            {/* Closing */}
            <Section className="px-6 py-6 text-center">
              <Text className="text-gray-600 text-xs leading-5 m-0 mb-4">
                Cu plăcere și succes!
              </Text>
              <Text className="text-gray-900 font-semibold text-xs m-0">Adrian</Text>
              <Text className="text-[#8ecb40] text-xs m-0">Fondator, Active Boost</Text>
            </Section>

            {/* Footer */}
            <Section className="py-6 border-t border-gray-200 text-center">
              <Text className="text-gray-500 text-xs m-0">
                © 2026 Active Boost. Toate drepturile rezervate.
              </Text>
            </Section>
          </Container>

        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailConfirmarePlata;