import { useRouter } from "next/router";
import TransferDetail from "src/commons/components/TransferDetail";

function transferDetail() {
  const router = useRouter();
  console.log(router);
  return <TransferDetail />;
}

export default transferDetail;
