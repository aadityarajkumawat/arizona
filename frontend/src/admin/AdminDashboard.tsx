import React, { useEffect, useState } from "react";
import { storage } from "../firebase/config";
import { addProduct, ProductInfo } from "../actions/AddProduct";
import { connect } from "react-redux";

interface Props {
  addProduct: (d: ProductInfo) => void;
}

const AdminDashboard: React.FC<Props> = ({ addProduct }) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [iurl, setUrl] = useState<string>("");

  const [product, setProduct] = useState({
    product_name: "",
    product_price: "",
    category: "",
    product_image: "",
  });

  const { product_name, product_price, category, product_image } = product;

  const types = ["image/png", "image/jpeg"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      console.log("File select error");
    }
  };

  useEffect(() => {
    if (file) {
      const storageRef = storage.ref(file.name);

      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          const uploaded = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(uploaded);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setProduct((prev) => {
            return { ...prev, product_image: url };
          });
          setUrl(url);
        }
      );
    }
  }, [file]);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct((prev) => {
      return { ...prev, product_image: iurl };
    });
    const { value, name } = e.target;

    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("just before sending", product);
    addProduct(product);
  };

  return (
    <div>
      <div>Add products</div>
      <br />
      <div>
        <input type="file" onChange={handleChange} />
        <div>{file ? file.name : "no file"}</div>
        <div>{progress ? progress : "0"}</div>
      </div>
      <br />

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="pro_name"
            value={product_name}
            name="product_name"
            onChange={handleForm}
          />
          <input
            type="text"
            placeholder="price"
            value={product_price}
            name="product_price"
            onChange={handleForm}
          />
          <input
            type="text"
            placeholder="category"
            value={category}
            name="category"
            onChange={handleForm}
          />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};
export default connect(null, { addProduct })(AdminDashboard);
