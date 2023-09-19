import { TailSpin } from "react-loader-spinner";
const LoaderComp = () => {
  return (
    <TailSpin
      height="50vh"
      width="100%"
      color="black"
      alignments="center"
      horizontalAlign="left"
      ariaLabel="tail-spin-loading"
      radius="0.2"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
export default LoaderComp;
