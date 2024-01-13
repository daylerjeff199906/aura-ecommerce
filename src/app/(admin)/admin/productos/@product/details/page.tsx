"use client";
import { Modal, ModalContent } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <Modal>
        <ModalContent>
          <span onClick={() => router.back()}>Back</span>
          Page details Content
        </ModalContent>
      </Modal>
    </>
  );
}
