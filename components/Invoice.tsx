import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Definim stilurile

// React PDF are Helvetica ca font default si nu suportă diacriticele românești (ă, î, ș, ț). Vei vedea pătrățele sau litere lipsă.
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf'
});


const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, fontFamily: 'Roboto' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  logo: {
    width: 200, // Lățimea în puncte (aprox px)
    height: 'auto',
    marginBottom: 10,
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  section: { marginBottom: 10 },
  label: { fontWeight: 'bold', fontSize: 10, color: '#666' },
  value: { fontSize: 12, marginBottom: 4 },
  table: { display: 'flex', width: 'auto', borderStyle: 'solid', borderWidth: 1, borderColor: '#eee', marginTop: 20 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center', height: 30 },
  col1: { width: '50%', paddingLeft: 5 },
  col2: { width: '25%', textAlign: 'right' },
  col3: { width: '25%', textAlign: 'right', paddingRight: 5 },
  total: { marginTop: 20, textAlign: 'right', fontSize: 14, fontWeight: 'bold' }
});

interface InvoiceProps {
  orderId: string;
  date: string;
  numeClient: string;
  emailClient: string;
  adresaClient: string;
  telefonClient: string;
  amount: string; 
  produs: string;
}

// DATELE FIRMEI TALE (Hardcodate sau din ENV)
const SELLER_INFO = {
  nume: "IDTORO S.R.L",
  cui: "RO51431636",
  reg: "J2024051439004",
  adresa: "Blvd. Dem Radulescu 15, Bloc X2, Scara A, Etaj 5, Ap. 37 Mun. Ramnicu Valcea, Județ Valcea, România",
  telefon: "0748904680"
};

export const InvoicePDF = ({ orderId, date, numeClient, emailClient, adresaClient, telefonClient, amount, produs }: InvoiceProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* Header Factură */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>FACTURĂ</Text>
          <Text style={styles.value}>Seria AB nr. {orderId.toUpperCase()}</Text>
          <Text style={styles.value}>Data: {date}</Text>
        </View>
        <View>
          <Image 
      style={styles.logo} 
      src="https://activeboost.ro/activeboost.png" 
    />
          <Text style={{...styles.title, fontSize: 16}}>Active Boost</Text>
        </View>
      </View>

      {/* Detalii Vânzător și Cumpărător */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <View style={{ width: '45%' }}>
          <Text style={styles.label}>FURNIZOR:</Text>
          <Text style={styles.value}>{SELLER_INFO.nume}</Text>
          <Text style={styles.value}>{SELLER_INFO.cui}</Text>
          <Text style={styles.value}>{SELLER_INFO.reg}</Text>
          <Text style={styles.value}>{SELLER_INFO.adresa}</Text>
          <Text style={styles.value}>{SELLER_INFO.telefon}</Text>
        </View>
        <View style={{ width: '45%' }}>
          <Text style={styles.label}>CLIENT:</Text>
          <Text style={styles.value}>{numeClient}</Text>
          <Text style={styles.value}>{emailClient}</Text>
          <Text style={styles.value}>{adresaClient}</Text>
          <Text style={styles.value}>{telefonClient}</Text>
        </View>
      </View>

      {/* Tabel Produse */}
      <View style={styles.table}>
        <View style={{...styles.tableRow, backgroundColor: '#f9f9f9'}}>
          <Text style={styles.col1}>Produs / Serviciu</Text>
          <Text style={styles.col2}>Cantitate</Text>
          <Text style={styles.col3}>Preț</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.col1}>{produs}</Text>
          <Text style={styles.col2}>1</Text>
          <Text style={styles.col3}>{amount}</Text>
        </View>
      </View>

      {/* Total */}
      <View style={styles.total}>
        <Text>Total de plată: {amount}</Text>
      </View>

      {/* Footer */}
      <View style={{ position: 'absolute', bottom: 30, left: 30, right: 30, textAlign: 'center' }}>
        <Text style={{ fontSize: 10, color: '#999' }}>
          Această factură a fost emisă automat și circulă fără semnătură și ștampilă cf. art. 319 Cod Fiscal.
        </Text>
      </View>

    </Page>
  </Document>
);