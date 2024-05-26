import Image from "next/image";
import Fotoawal from "@/images/madavi.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/portfolio"}>Portfolio</Link>
     <Image src={Fotoawal} alt="" className="w-10" />
    </>
  );
}
