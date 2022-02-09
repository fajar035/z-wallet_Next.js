import { useRouter } from "next/router";
import TransferDetail from "src/commons/components/TransferDetail";

function TransferDetail() {
  const router = useRouter();
  console.log(router);
  return <TransferDetail />;
}

export default TransferDetail;
