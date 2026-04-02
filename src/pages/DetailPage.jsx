import { useParams } from "react-router-dom";

function DetailPage() {
  const { barcode } = useParams();

  return (
    <div>
      <h2>Detail Page</h2>
      <p>Product barcode: {barcode}</p>
    </div>
  );
}

export default DetailPage;