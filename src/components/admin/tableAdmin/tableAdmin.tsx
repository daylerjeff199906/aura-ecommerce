"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableCell,
  TableRow,
  getKeyValue,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import { IconEdit, IconTrash, IconEye, IconReload } from "@tabler/icons-react";
import Link from "next/link";

interface IProps {
  url_base?: string;
  isExternalUrl?: boolean;
  handleAction?: (id: string, state: boolean) => void;
  columns: {
    key: string;
    label: string;
  }[];
  rows: {
    key: string;
    [key: string]: string | React.ReactNode;
  }[];
}

export const TableAdmin = ({
  columns,
  rows,
  url_base,
  isExternalUrl,
  handleAction,
}: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stateSelected, setStateSelected] = useState({
    id: "",
    isActive: "",
  });

  const linkHref = isExternalUrl ? `?edit` : `/admin/${url_base}/edit`;

  return (
    <>
      <Table aria-label="Table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "actions" ? (
                    <div className="flex justify-center gap-2">
                      <Button isIconOnly size="sm" variant="light">
                        <IconEye />
                      </Button>
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        color="success"
                        as={Link}
                        href={`${linkHref}?id=${item.key}`}
                      >
                        <IconEdit />
                      </Button>
                      <Button
                        className=""
                        isIconOnly
                        size="sm"
                        variant="light"
                        color={
                          getKeyValue(item, "isActive") === "Si"
                            ? "danger"
                            : "success"
                        }
                        onPress={() => {
                          setStateSelected({
                            id: item.key,
                            isActive: getKeyValue(item, "isActive"),
                          });
                          onOpen();
                        }}
                      >
                        {getKeyValue(item, "isActive") === "Si" ? (
                          <IconTrash />
                        ) : (
                          <IconReload />
                        )}
                      </Button>
                    </div>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal size="sm" isOpen={isOpen} onClose={onClose} className="p-0">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Realizar accion
              </ModalHeader>
              <ModalBody>
                <h1>
                  {stateSelected?.isActive === "Si" ? "Desactivar" : "Activar"}{" "}
                  elemento?
                </h1>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    handleAction &&
                      handleAction(
                        stateSelected?.id,
                        stateSelected?.isActive === "Si" ? false : true
                      );
                  }}
                >
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
