// "use client";
// import { useEffect } from "react";
// import { useDataProducts } from "@/hooks";
// import {
//   doc,
//   getDoc,
//   DocumentData,
//   DocumentReference,
// } from "firebase/firestore";
// import { db } from "@/firebase/firebase";
// import type { Metadata } from "next";

import { DetailsSection } from "./(sections)/detailsSection";

type Props = {
  params: { id: string };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   try {
//     //Obtiene el documento por el id
//     const productRef: DocumentReference<DocumentData> = doc(db, "products", id);
//     const productSnap = await getDoc(productRef);

//     if (!productSnap.exists()) {
//       console.log("No such document!");
//       return {
//         title: "No such document!",
//       };
//     }

//     const productData: DocumentData = productSnap.data();
//     const productTitle = productData.name || "No name";

//     return {
//       title: productTitle,
//     };
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//     throw error;
//   }
// }

export default function Page({ params }: Props) {
  // const { getProductById } = useDataProducts();

  // useEffect(() => {
  //   getProductById(params.id);
  // }, [params.id]);
  const id = params.id;

  return <DetailsSection id={id} />;
}
