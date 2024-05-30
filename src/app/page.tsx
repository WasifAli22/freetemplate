import Image from "next/image";
import Webbanner from "@/components/highAchiversSect/webbanner";
import Navbar from "@/components/Navbar/Navbar"
import Parentsof from "@/components/parentsOf/Parentsof";
import NoGurrante from "@/components/noGurranteSect/NoGurrante";
import GetStructer from "@/components/getStructer/GetStructer";
import CollegeAdmission from "@/components/collgeadmission/CollegeAdmission";

export default function Home() {
  return (
    <div className="bg-[#f0f9fe]">
      <Navbar />
      <Webbanner />
      <GetStructer />
      <Parentsof />
      <CollegeAdmission />
      <NoGurrante />
    </div>
  );
}
