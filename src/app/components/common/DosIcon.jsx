import Image from "next/legacy/image";

const DosIcon = ({ width, height }) => {
  return (
    <Image
      src="/logo/dos_logo.png"
      alt="DoS Logo"
      width={width || 48}
      height={height || 48}
      layout="fixed"
      objectFit="cover"
      placeholder={"blur"}
      blurDataURL={"/logo/dos_logo.png"}
      className="mx-2"
    />
  );
};

export default DosIcon;
