import * as React from 'react';
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

// 1. Definim ce date (props) va primi email-ul nostru
export interface EmailFollowUpProps {
  customer_firstName: string;
 
}

const LOGO_URL = 'https://www.activeboost.ro/activeboost.png'; 

export const EmailFollowUp: React.FC<EmailFollowUpProps> = ({ customer_firstName }) => {

    return (
        <Html lang='ro'>
         <Head/>
          <Preview>Cum merge? O mică întrebare pentru tine...</Preview>
           
           <Tailwind>
               <Body className=" text-gray-800 font-sans">
                 <Container className="bg-white border border-gray-200 rounded-lg shadow-sm my-10 mx-auto p-8 max-w-sm">
                      {/* Logo (Opțional, dar recomandat) */}
                                <Section className="mt-4 mb-8 text-center">
                                  <Img src={LOGO_URL} width="180" alt="Active Boost Logo" className="mx-auto" />
                                </Section>

                                <Heading className="text-3xl font-bold text-black text-center">
                                              Salut, {customer_firstName}!
                                            </Heading>
                                             

                                             <Section className='mt-5'>
                                              <Text className="text-lg leading-7 mx-2">
                                                Sunt din nou Adrian. Au trecut câteva zile de când ai descărcat ghidul "10 Hack-uri Simple" și sunt foarte curios cum merge călătoria ta.
                                            </Text>
<Text className="text-lg leading-7 mx-2">
Ai apucat să răsfoiești ghidul? Ai încercat vreun hack la ultima masă?</Text>

<Text className="text-lg leading-7 mx-2">Am o rugăminte specială la tine:</Text>

<Text className="text-lg leading-7 mx-2">Părerea ta sinceră este extrem de importantă pentru mine. M-ar ajuta enorm dacă ai putea să-mi răspunzi direct la acest email cu 1-2 propoziții despre ce ți-a plăcut cel mai mult până acum sau dacă ai simțit deja o mică diferență în nivelul tău de energie.</Text>

<Text className="text-lg leading-7 mx-2">Nu trebuie să fie ceva complicat. Doar câteva cuvinte despre experiența ta. Feedback-ul tău mă ajută să duc acest mesaj la și mai mulți oameni care au nevoie de el.</Text>

<Text className="text-lg leading-7 mx-2">Îți mulțumesc!</Text>

<Text className="text-lg leading-7 mx-2">Cu respect, Adrian</Text>
                                             </Section>
                                           



 {/* Secțiunea P.S. (Lista de Așteptare) */}
            <Section className="mt-10 pt-6 border-t border-gray-300">
              <Heading as="h2" className="text-xl font-semibold text-black mx-5">
               P.S.: Încă o șansă pentru dimineți liniștite... ⏰
              </Heading>
              <Text className="text-base leading-6 mx-2">
                În caz că ți-a scăpat în primul email sau în ghid: dacă te lupți în continuare cu diminețile haotice și simți că nu ai timp să-ți prepari un mic dejun corect (ajungând tot la patiserie), am soluția pregătită.
              </Text>
              <Text className="text-base leading-6 mx-2">
                Înscrie-te pe lista de așteptare pentru programul "Start Activ" – soluția de nutriție gata în 2 minute, concepută special pentru oamenii ocupați..
              </Text>

              <Text className="text-base leading-6 mx-2">
               Vei primi prioritate și o ofertă specială la lansare.
              </Text>
              <Button
                className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-md mt-4 text-center m-5"
              
              >
                DA, Vreau să mă înscriu pe Lista de Așteptare!
              </Button>
            </Section>

                 </Container>


               </Body>

           </Tailwind>
        </Html>
    )
}