import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

export const getTemplateCats = async () => {
  const templateCatsRef = collection(db, "templateCats");
  const q = query(templateCatsRef, orderBy("name"));
  const snapshot = await getDocs(q);
  const data = snapshot.docs;

  const cats = data.map((el) => el.data());

  console.log(cats);
};
