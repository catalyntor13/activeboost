import Header from "@/app/sectiuni/Header"
import PovesteaMea from "@/app/sectiuni/Povestea-Mea";
import Ghid from "@/app/sectiuni/Ghid";
import CePrimesti from '@/app/sectiuni/Ce-Primesti';
import Testimoniale from "@/app/sectiuni/Testimoniale";
import Footer from "@/app/sectiuni/Footer"
 

export default function Home() {

  return (
    <div className="flex flex-col items-center">
     <Header/>
     <PovesteaMea/>
     <Ghid/>
     <CePrimesti/>
     <Testimoniale/>
     <Footer/>
    </div>
  );
}
