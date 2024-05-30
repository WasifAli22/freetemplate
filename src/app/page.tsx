import Image from "next/image";
import Webbanner from "@/components/highAchiversSect/webbanner";
import Navbar from "@/components/Navbar/Navbar"
import NoGurrante from "@/components/HomeSect/noGurranteSect/NoGurrante";
import GetStructer from "@/components/HomeSect/getStructer/GetStructer";
import CollegeAdmission from "@/components/HomeSect/collgeadmission/CollegeAdmission";
import Wewant from "@/components/HomeSect/wewant/Wewant";
import Weare from "@/components/HomeSect/weare/Weare";
import MoreOpportunities from "@/components/HomeSect/moreOpportunities/MoreOpportunities";
import IfYou from "@/components/HomeSect/ifyou/IfYou";
import DontLimit from "@/components/HomeSect/dontLimit/DontLimit";
import Parentsof from "@/components/HomeSect/parentsOf/Parentsof";
import Percentage from "@/components/HomeSect/percentage/Percentage";
import Steps from "@/components/HomeSect/steps/step";

export default function Home() {
  return (
    <div className="bg-[#f0f9fe]">
      <Navbar />
      <Webbanner />
      <GetStructer />
      <Parentsof />
      <CollegeAdmission />
      <NoGurrante />
      <Percentage />
      <Weare />
      <Wewant />
      <MoreOpportunities />
      <IfYou/>
      <Steps />
      <DontLimit/>
    </div>
  );
}
