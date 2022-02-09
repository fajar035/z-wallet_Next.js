import { useRouter } from "next/router";
import TransferDetail2 from "src/commons/components/TransferDetail";

function TransferDetail() {
  const router = useRouter();
  console.log(router);
  return <TransferDetail2 />;
}

export default TransferDetail;
